import { connect } from "@/lib/db";
import Comment from "@/models/commentModel";
import { NextRequest, NextResponse } from "next/server";

connect(); export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const name = data.get("name")?.toString();
        const email = data.get("email")?.toString();
        const content = data.get("content")?.toString();
        const blogId = data.get("blogId")?.toString();

        if (!name || !email || !content || !blogId) {
            return NextResponse.json({
                message: "Name, email, content, and blog ID are required",
                success: false,
            }, { status: 400 });
        }

        const newComment = new Comment({
            name,
            email,
            content,
            blogId,
        });

        await newComment.save();
        return NextResponse.json({
            message: "Comment added successfully",
            success: true,
            comment: newComment,
        }, { status: 201 });

    } catch (error: any) {
        return NextResponse.json({
            message: "Failed to add comment",
            error: error.message,
            success: false,
        }, { status: 500 });
    }
}



export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page")!) || 1;
        const limit = parseInt(searchParams.get("limit")!) || undefined;

        const skip = limit ? (page - 1) * limit : 0;

        let commentsQuery = Comment.find({});

        if (limit) {
            commentsQuery = commentsQuery.skip(skip).limit(limit);
        }

        const contacts = await commentsQuery.exec();
        const totalCount = await Comment.countDocuments();

        return NextResponse.json(
            {
                contacts,
                totalCount,
                currentPage: page,
                totalPages: limit ? Math.ceil(totalCount / limit) : 1,
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Failed to retrieve Comment:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to retrieve Comment",
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
                    message: "Comment ID is required",
                }),
                { status: 400 }
            );
        }

        // First, find the blog by ID to get the image path
        const contactToDelete = await Comment.findById(id);
        if (!contactToDelete) {
            return new NextResponse(
                JSON.stringify({
                    message: "Comment not found",
                }),
                { status: 404 }
            );
        }

        // If the blog has an associated image, delete it from the filesystem


        // Proceed to delete the blog from the database
        const deletedCommenet = await Comment.findByIdAndDelete(id);
        if (!deletedCommenet) {
            return new NextResponse(
                JSON.stringify({
                    message: "Failed to delete Comment",
                }),
                { status: 500 }
            );
        }

        return new NextResponse(
            JSON.stringify({
                message: "Comment deleted successfully",
            }),
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Failed to delete Comment:", error);
        return new NextResponse(
            JSON.stringify({
                message: "Failed to delete Comment",
                error: error.message,
            }),
            { status: 500 }
        );
    }
}
