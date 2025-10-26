// CRITICAL: Load environment variables FIRST using require to ensure synchronous loading
import * as dotenv from "dotenv";
import * as path from "path";

// Load .env.local synchronously before any other imports
const envPath = path.resolve(process.cwd(), ".env.local");
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error("❌ Error loading .env.local:", result.error);
} else {
  console.log(`📁 Loaded environment variables from: ${envPath}`);
  console.log(`✅ Variables loaded: ${Object.keys(result.parsed || {}).length}`);
}

import connectDB from "../lib/db";
import PreUser from "../lib/models/PreUser";
import User from "../lib/models/User";
import fs from "fs";

async function migrateUsers() {
  try {
    console.log("🔄 Starting user migration...");
    
    // Connect to database
    await connectDB();
    console.log("✅ Connected to database");

    // Fetch all prelaunch users
    const preUsers = await PreUser.find({});
    console.log(`📊 Found ${preUsers.length} prelaunch users to migrate`);

    if (preUsers.length === 0) {
      console.log("⚠️  No users to migrate");
      return;
    }

    let successCount = 0;
    let errorCount = 0;
    let skippedCount = 0;
    const errors: Array<{ email: string; error: string }> = [];

    // Migrate each user
    for (const preUser of preUsers) {
      try {
        // Check if user already exists in production database
        const existingUser = await User.findOne({ email: preUser.email });
        
        if (existingUser) {
          console.log(`⏭️  Skipping ${preUser.email} - already exists`);
          skippedCount++;
          continue;
        }

        // Create new user with early member flag
        const newUser = new User({
          name: preUser.name,
          email: preUser.email,
          password: preUser.password, // Already hashed from prelaunch signup
          joinedAt: preUser.joinedAt,
          isEarlyMember: true,
          accountStatus: "pending", // They need to set password or use magic link
          passwordSetAt: null,
          lastLogin: null,
        });

        await newUser.save();
        successCount++;
        console.log(`✅ Migrated: ${preUser.email}`);

      } catch (error: any) {
        errorCount++;
        const errorMsg = error.message || "Unknown error";
        errors.push({ email: preUser.email, error: errorMsg });
        console.error(`❌ Failed to migrate ${preUser.email}:`, errorMsg);
      }
    }

    // Generate migration report
    const report = {
      timestamp: new Date().toISOString(),
      totalPreUsers: preUsers.length,
      successCount,
      skippedCount,
      errorCount,
      errors,
    };

    console.log("\n📊 Migration Report:");
    console.log(JSON.stringify(report, null, 2));

    // Save report to file
    const reportPath = path.join(process.cwd(), "migration-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n💾 Report saved to: ${reportPath}`);

    return report;
  } catch (error) {
    console.error("❌ Migration failed:", error);
    throw error;
  } finally {
    process.exit(0);
  }
}

// Run migration
migrateUsers();
