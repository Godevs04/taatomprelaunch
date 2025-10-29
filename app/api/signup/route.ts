import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import PreUser from "@/lib/models/PreUser";
import { sendConfirmationEmail } from "@/lib/mailer";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { name, username, email, password } = await request.json();

    if (!name || !username || !email || !password) {
      return NextResponse.json(
        { error: "Name, username, email, and password are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate username format (allow letters, numbers, underscore and dot)
    const usernameRegex = /^[a-z0-9_.]+$/;
    const normalizedUsername = username.toLowerCase().trim();
    if (!usernameRegex.test(normalizedUsername)) {
      return NextResponse.json(
        { error: "Username can only contain lowercase letters, numbers, underscores and dots" },
        { status: 400 }
      );
    }

    if (normalizedUsername.length < 3 || normalizedUsername.length > 30) {
      return NextResponse.json(
        { error: "Username must be between 3 and 30 characters" },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if username already exists
    const existingUsername = await PreUser.findOne({ username: normalizedUsername });
    if (existingUsername) {
      return NextResponse.json(
        { error: "Username already exists. Please try another username." },
        { status: 409 }
      );
    }

    // Check if email already exists
    const existingUser = await PreUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with isEarlyMember flag
    const newUser = new PreUser({
      name,
      username: normalizedUsername,
      email,
      password: hashedPassword,
      isEarlyMember: true, // Mark as early member
    });

    await newUser.save();

    // Send confirmation email
    await sendConfirmationEmail(email, name);

    return NextResponse.json(
      {
        success: true,
        message: "Successfully registered! Check your email for confirmation.",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup error:", error);
    
    if (error.code === 11000) {
      // Check which field caused the duplicate error
      const duplicateField = error.keyPattern?.username ? "username" : "email";
      const errorMessage = duplicateField === "username" 
        ? "Username already exists. Please try another username."
        : "Email already registered";
      return NextResponse.json(
        { error: errorMessage },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

