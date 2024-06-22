import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")!) || 1;
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? parseInt(limitParam) : undefined;

    const skip = limit ? (page - 1) * limit : 0;

    let usersQuery = User.find({}, { password: 0 });

    if (limit) {
      usersQuery = usersQuery.skip(skip).limit(limit);
    }

    const users = await usersQuery.exec();
    const totalCount = await User.countDocuments({});

    return NextResponse.json(
      {
        users,
        totalCount,
        currentPage: page,
        totalPages: limit ? Math.ceil(totalCount / limit) : 1,
      },
      { status: 200 }
    );
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
