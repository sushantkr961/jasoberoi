import { handleFileUpload } from "@/helpers/fileUpload";
import { connect } from "@/lib/db";
import SoldStories from "@/models/soldStories";
import { writeFile, unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

connect();
export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const title = data.get("title");
        const content = data.get("content");

        if (!title || !content) {
            return new Response(
                JSON.stringify({
                    message: "Title and content are required",
                    success: false,
                }),
                { status: 400 }
            );
        }
        const images = await handleFileUpload(
            data.getAll("images[]"),
            "./public/uploads"
        );


        const singleImage = await handleFileUpload(
            data.getAll("singleImage[]"),
            "./public/uploads"
        );


        try {
            const newPost = new SoldStories({
                title,
                content,
                singleImage,
                images
            });

            await newPost.save();
            return new NextResponse(
                JSON.stringify({
                    message: "SoldStories added successfully",
                    success: true,
                    post: newPost,
                }),
                { status: 201 }
            );
        } catch (error: any) {
            return new NextResponse(
                JSON.stringify({
                    message: "Failed to add SoldStories",
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

        let soldStoriesQuery = SoldStories.find({});

        if (limit) {
            soldStoriesQuery = soldStoriesQuery.skip(skip).limit(limit);
        }

        const soldStories = await soldStoriesQuery.exec();
        const totalCount = await SoldStories.countDocuments(); // Total count of all documents

        return NextResponse.json(
            {
                soldStories,
                totalCount,
                currentPage: page,
                totalPages: limit ? Math.ceil(totalCount / limit) : 1,
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Failed to retrieve soldStories:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to retrieve soldStories",
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
                    message: "Sold Stories ID is required",
                }),
                { status: 400 }
            );
        }

        // Retrieve the property to get image URLs
        const soldStoriesToDelete = await SoldStories.findById(id);
        if (!soldStoriesToDelete) {
            return new NextResponse(
                JSON.stringify({
                    message: "SoldStories not found",
                }),
                { status: 404 }
            );
        }

        // Delete all associated images
        const imagePaths = [
            ...soldStoriesToDelete.singleImage,
            ...soldStoriesToDelete.images,
        ];

        // Use Promise.all to handle multiple asynchronous operations
        await Promise.all(
            imagePaths.map((imagePath) =>
                unlink(`./public${imagePath}`).catch((error) => {
                    console.error(`Failed to delete image at ${imagePath}:`, error);
                })
            )
        );

        const deletedSoldStories = await SoldStories.findByIdAndDelete(id);
        // If the blog has an associated image, delete it from the filesystem
        if (!deletedSoldStories) {
            return new NextResponse(
                JSON.stringify({
                    message: "SoldStories not found",
                }),
                { status: 404 }
            );
        }

        return new NextResponse(
            JSON.stringify({
                message: "SoldStories deleted successfully",
                // deletedProperty,
            }),
            { status: 200 }
        );


    } catch (error: any) {
        console.error("Failed to delete SoldStories:", error);
        return new NextResponse(
            JSON.stringify({
                message: "Failed to delete SoldStories",
                error: error.message,
            }),
            { status: 500 }
        );
    }
}
