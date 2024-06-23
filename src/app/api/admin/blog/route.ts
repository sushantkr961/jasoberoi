import { connect } from "@/lib/db";
import Blog from "@/models/blogModel";
import { writeFile, unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

connect();
export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const title = data.get("title");
    const content = data.get("content");
    const file = data.get("file");

    // console.log(3333, data);

    if (!title || !content) {
      return new Response(
        JSON.stringify({
          message: "Title and content are required",
          success: false,
        }),
        { status: 400 }
      );
    }

    if (!(file instanceof File)) {
      return new NextResponse(
        JSON.stringify({
          message: "No valid file uploaded",
          success: false,
        }),
        { status: 400 }
      );
    }

    let imageUrl = "";
    if (file) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const extension = file.name.split(".").pop();
      const fileName = `${uuidv4()}.${extension}`;
      const path = `./public/uploads/${fileName}`;
      await writeFile(path, buffer);
      imageUrl = `/uploads/${fileName}`;
    }
    try {
      const newPost = new Blog({
        title,
        content,
        imageUrl,
      });

      await newPost.save();
      return new NextResponse(
        JSON.stringify({
          message: "Blog post added successfully",
          success: true,
          post: newPost,
        }),
        { status: 201 }
      );
    } catch (error: any) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed to add blog post",
          error: error.message,
          success: false,
        }),
        { status: 500 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")!) || 1; // Default to page 1 if not provided
    const limit = parseInt(searchParams.get("limit")!) || undefined; // Default to 10 items per page if not provided

    const skip = limit ? (page - 1) * limit : 0; // Calculate skip based on limit if limit is defined

    let blogsQuery = Blog.find({});

    if (limit) {
      blogsQuery = blogsQuery.skip(skip).limit(limit);
    }

    const blogs = await blogsQuery.exec();
    const totalCount = await Blog.countDocuments(); // Total count of all documents
    
    // console.log(blogs);

    return NextResponse.json(
      {
        blogs,
        totalCount,
        currentPage: page,
        totalPages: limit ? Math.ceil(totalCount / limit) : 1,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to retrieve blog blogs:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to retrieve blog blogs",
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

    if (!id) {
      return new NextResponse(
        JSON.stringify({
          message: "Blog ID is required",
        }),
        { status: 400 }
      );
    }

    // First, find the blog by ID to get the image path
    const blogToDelete = await Blog.findById(id);
    if (!blogToDelete) {
      return new NextResponse(
        JSON.stringify({
          message: "Blog not found",
        }),
        { status: 404 }
      );
    }

    // If the blog has an associated image, delete it from the filesystem
    if (blogToDelete.imageUrl) {
      await unlink(`./public${blogToDelete.imageUrl}`).catch((error) => {
        console.error("Failed to delete image:", error);
        // Consider how to handle errors; perhaps don't throw if the image delete fails
        throw new Error("Failed to delete associated image");
      });
    }

    // Proceed to delete the blog from the database
    const deletedProperty = await Blog.findByIdAndDelete(id);
    if (!deletedProperty) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed to delete blog post after image deletion",
        }),
        { status: 500 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Blog deleted successfully",
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to delete blog:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to delete blog",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
