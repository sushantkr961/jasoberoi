import { connect } from "@/lib/db";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { SignJWT } from "jose";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json(
        { message: "email and password required" },
        { status: 400 }
      );
    }
    // console.log(reqBody);
    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 200 }
      );
    }
    // console.log("user exists");
    //check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      // console.log("invalid password");
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 200 }
      );
    }

    //create token data
    const userId = user._id;
    const token = await new SignJWT({ userId,role:user.isAdmin })
      .setProtectedHeader({ alg: 'HS256' }) // Set the protected header
      .setIssuedAt()
      .setExpirationTime('1d')
      .sign(new TextEncoder().encode(process.env.TOKEN_SECRET!));

    const response = NextResponse.json({
      message: "Login successful",
      success: true,    
      token: token,
      isAdmin: user.isAdmin,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    console.error(7777, error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
