import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import PreUser from "@/lib/models/PreUser";

export async function POST(request: NextRequest) {
  try {
    const { username } = await request.json();

    if (!username) {
      return NextResponse.json(
        { error: "Username is required" },
        { status: 400 }
      );
    }

    // Validate username format (allow letters, numbers, underscore and dot)
    const usernameRegex = /^[a-z0-9_.]+$/;
    if (!usernameRegex.test(username.toLowerCase())) {
      return NextResponse.json(
        { available: false, error: "Username can only contain lowercase letters, numbers, underscores and dots" },
        { status: 200 }
      );
    }

    if (username.length < 3 || username.length > 30) {
      return NextResponse.json(
        { available: false, error: "Username must be between 3 and 30 characters" },
        { status: 200 }
      );
    }

    await connectDB();

    // Check if username already exists
    const existingUser = await PreUser.findOne({ 
      username: username.toLowerCase().trim() 
    });

    if (existingUser) {
      return NextResponse.json(
        { available: false, error: "Username already exists. Please try another username." },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { available: true },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Check username error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

