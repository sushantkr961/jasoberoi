import { connect } from "@/lib/db";
import Blog from "@/models/blogModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
// import nextConnect from 'next-connect';
import path from "path";

connect();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  console.log(88888, reqBody);

  const { title, content, author } = reqBody;

  try {
    // Find the user by name and use their ObjectId
    const user = await User.findOne({ username: author });
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    const newPost = new Blog({
      title,
      content,
      author: user._id, // Use the ObjectId from the User document
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
}

export async function GET(req: NextRequest) {
  try {
    const posts = await Blog.find({});
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error: any) {
    console.error("Failed to retrieve blog posts:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to retrieve blog posts",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
