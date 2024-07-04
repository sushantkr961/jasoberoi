import { getDataFromToken } from "@/helpers/getTokenData";
import { connect } from "@/lib/db";
import User from "@/models/userModel";
import { jwtVerify } from "jose";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || '';
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.TOKEN_SECRET!));
    const user = await User.findOne({ _id: payload.userId }).select("-password");

    return NextResponse.json({
      mesaaage: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}


