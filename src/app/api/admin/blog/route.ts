import { connect } from "@/lib/db";
import Blog from "@/models/blogModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(55555, reqBody);
    const { title, content } = reqBody;

    try {
      const newPost = new Blog({
        title,
        content,
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
