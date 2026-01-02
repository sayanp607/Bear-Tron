import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || ""

async function verifyCaptcha(token: string): Promise<boolean> {
  // Skip verification in development if no secret key is set
  if (!RECAPTCHA_SECRET_KEY || RECAPTCHA_SECRET_KEY === "") {
    console.warn("RECAPTCHA_SECRET_KEY not set, skipping verification in development")
    return true
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error("CAPTCHA verification error:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const { name, email, password, captchaToken } = await request.json()

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ message: "Password must be at least 6 characters" }, { status: 400 })
    }

    // Verify CAPTCHA
    if (captchaToken) {
      const isCaptchaValid = await verifyCaptcha(captchaToken)
      if (!isCaptchaValid) {
        return NextResponse.json({ message: "CAPTCHA verification failed" }, { status: 400 })
      }
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() })

    if (existingUser) {
      return NextResponse.json({ message: "Email already registered" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    })

    return NextResponse.json(
      {
        message: "Account created successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Sign up error:", error)

    // Handle duplicate key error
    if (error.code === 11000) {
      return NextResponse.json({ message: "Email already registered" }, { status: 409 })
    }

    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
