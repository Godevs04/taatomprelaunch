import * as dotenv from "dotenv";
import connectDB from "../lib/db";
import PreUser from "../lib/models/PreUser";
import { sendConfirmationEmail } from "../lib/mailer";

dotenv.config();

async function sendEarlyMemberCampaign() {
  try {
    await connectDB();

    // Find all early members
    const earlyMembers = await PreUser.find({ isEarlyMember: true });

    console.log(`Found ${earlyMembers.length} early members`);

    // Send campaign email to each early member
    for (const member of earlyMembers) {
      await sendConfirmationEmail(member.email, member.name);
      console.log(`Sent campaign email to: ${member.email}`);
    }

    console.log("Campaign emails sent successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error sending campaign:", error);
    process.exit(1);
  }
}

sendEarlyMemberCampaign();
