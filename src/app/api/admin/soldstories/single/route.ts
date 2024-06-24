


import { connect } from "@/lib/db";
import SoldStories from "@/models/soldStories";
import { NextRequest } from "next/server";

connect();

// Fetch a single blog post by ID
export async function GET(req: NextRequest) {
    // Parse the ID from the URL query
    const { searchParams } = new URL(req.url);
    // console.log(searchParams.get("id"));
    const id = searchParams.get("id");

    if (!id) {
        return new Response(JSON.stringify({ message: "SoldStories ID is required" }), {
            status: 400,
        });
    }

    try {
        const post = await SoldStories.findById(id);    
        if (!post) {
            return new Response(JSON.stringify({ message: "SoldStories not found" }), {
                status: 404,
            });
        }
        return new Response(JSON.stringify(post), { status: 200 });
    } catch (error) {
        console.error("Failed to retrieve the soldStories post:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to retrieve the soldStories post",
                error: error,
            }),
            { status: 500 }
        );
    }
}
