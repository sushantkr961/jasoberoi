import { connect } from "@/lib/db";
import Blog from "@/models/blogModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { title, content } = reqBody;
    console.log(55555, reqBody);

    try {
      // const user = await User.findOne({ username: author });
      // if (!user) {
      //   return new Response(JSON.stringify({ message: "User not found" }), {
      //     status: 404,
      //   });
      // }

      const newPost = new Blog({
        title,
        content,
        // author: user._id,
      });

      await newPost.save();
      return new Response(JSON.stringify(newPost), { status: 201 });
    } catch (error: any) {
      console.error("Failed to add blog post:", error);
      return new Response(
        JSON.stringify({
          message: "Failed to add blog post",
          error: error.message,
        }),
        { status: 500 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
