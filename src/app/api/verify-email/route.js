import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Allowed emails - Move these to ENV later for security
const allowedEmails = [
  "brandonlin828@gmail.com"
];

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Check if the email is in the allowed list
    if (!allowedEmails.includes(email)) {
      return NextResponse.json(
        { error: "Email not authorized" },
        { status: 401 }
      );
    }

    // Token verification can be added here if necessary
    return NextResponse.json({ success: true, message: "Email verified!" });
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json(
      { error: "Error verifying email" },
      { status: 500 }
    );
  }
}
