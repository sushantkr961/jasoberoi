import User from "@/models/userModel";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const users = await User.find({}, { password: 0 });
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    console.error("Failed to retrieve users", error);
    return new Response(
      JSON.stringify({
        message: "Failed to retrieve users",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
