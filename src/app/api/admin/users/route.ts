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

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    // console.log(4444, id);

    if (!id) {
      return new NextResponse(
        JSON.stringify({
          message: "User ID is required",
        }),
        { status: 400 }
      );
    }

    const deletedProperty = await User.findByIdAndDelete(id);

    if (!deletedProperty) {
      return new NextResponse(
        JSON.stringify({
          message: "User not found",
        }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "User deleted successfully",
        // deletedProperty,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to delete user:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to delete user",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}