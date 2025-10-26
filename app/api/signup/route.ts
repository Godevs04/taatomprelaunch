import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import PreUser from "@/lib/models/PreUser";
import { sendConfirmationEmail } from "@/lib/mailer";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
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

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if user already exists
    const existingUser = await PreUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new PreUser({
      name,
      email,
      password: hashedPassword,
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
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

