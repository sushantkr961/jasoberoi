import { connect } from "@/lib/db";
import Blog from "@/models/blogModel";
import { NextRequest } from "next/server";

connect();

// Fetch a single blog post by ID
export async function GET(req: NextRequest) {
  // Parse the ID from the URL query
  const { searchParams } = new URL(req.url);
  // console.log(searchParams.get("id"));
  const id = searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ message: "Blog ID is required" }), {
      status: 400,
    });
  }

  try {
    const post = await Blog.findById(id);
    if (!post) {
      return new Response(JSON.stringify({ message: "Blog not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error("Failed to retrieve the blog post:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to retrieve the blog post",
        error: error,
      }),
      { status: 500 }
    );
  }
}

// Fetch a single blog post by ID
export async function DELETE(req: NextRequest) {

  // console.log("called");
  
  const { searchParams } = new URL(req.url); // Parse URL parameters
  const id = searchParams.get("id");
  if (!id) {
    return new Response(JSON.stringify({ message: "Blog ID is required" }), {
      status: 400,
    });
  }

  try {
    const post = await Blog.findById(id);
    if (!post) {
      return new Response(JSON.stringify({ message: "Blog not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error("Failed to retrieve the blog post:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to retrieve the blog post",
        error: error,
      }),
      { status: 500 }
    );
  }
}

