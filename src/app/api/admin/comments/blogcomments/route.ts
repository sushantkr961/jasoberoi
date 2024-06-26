import { connect } from "@/lib/db";
import Comment from "@/models/commentModel";
import { NextRequest } from "next/server";

connect();

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("blogId");

    if (!blogId) {
        return new Response(JSON.stringify({ message: "Blog ID is required" }), {
            status: 400,
        });
    }

    try {
        const comments = await Comment.find({ blogId });
        if (!comments.length) {
            return new Response(JSON.stringify({ message: "No comments found for this blog post" }), {
                status: 404,
            });
        }
        return new Response(JSON.stringify(comments), { status: 200 });
    } catch (error) {
        console.error("Failed to retrieve comments:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to retrieve comments",
                error: error,
            }),
            { status: 500 }
        );
    }
}
