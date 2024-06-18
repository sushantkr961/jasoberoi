import { connect } from "@/lib/db";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    console.log(44444, data);
    
    // const title = data.get("title");
    // const content = data.get("content");
    // const file = data.get("file");

    // if (!title || !content) {
    //   return new Response(
    //     JSON.stringify({
    //       message: "Title and content are required",
    //       success: false,
    //     }),
    //     {
    //       status: 400,
    //     }
    //   );
    // }

    // if (!(file instanceof File)) {
    //   return new Response(
    //     JSON.stringify({
    //       message: "No valid file uploaded",
    //       success: false,
    //     }),
    //     {
    //       status: 400,
    //     }
    //   );
    // }

    // let imageUrl = "";
    // if (file) {
    //   const byteData = await file.arrayBuffer();
    //   const buffer = Buffer.from(byteData);
    //   const fileName = file.name.replace(/\s+/g, "_");
    //   const path = `./public/uploads/${fileName}`;
    //   await writeFile(path, buffer);
    //   imageUrl = `/uploads/${fileName}`;
    // }

    // const newPost = new Blog({
    //   title,
    //   content,
    //   imageUrl,
    // });

    // await newPost.save();
    // return new Response(
    //   JSON.stringify({
    //     message: "Blog post added successfully",
    //     success: true,
    //     post: newPost,
    //   }),
    //   {
    //     status: 201,
    //   }
    // );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: "Failed to add blog post",
        error: error.message,
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
}

// Handles GET requests to retrieve all blog posts
// export async function GET(req: NextRequest) {
//   try {
//     const blogs = await Blog.find({});
//     return new Response(JSON.stringify(blogs), {
//       status: 200,
//     });
//   } catch (error: any) {
//     return new Response(
//       JSON.stringify({
//         message: "Failed to retrieve blog posts",
//         error: error.message,
//       }),
//       {
//         status: 500,
//       }
//     );
//   }
// }
