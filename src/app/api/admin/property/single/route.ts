import { connect } from "@/lib/db";
import Property from "@/models/propertyModel";
import { NextRequest } from "next/server";

connect();

// Fetch a single blog post by ID
export async function GET(req: NextRequest) {
    // Parse the ID from the URL query
    const { searchParams } = new URL(req.url);
    // console.log(searchParams.get("id"));
    const id = searchParams.get("id");

    if (!id) {
        return new Response(JSON.stringify({ message: "Property ID is required" }), {
            status: 400,
        });
    }

    try {
        const post = await Property.findById(id);
        if (!post) {
            return new Response(JSON.stringify({ message: "Property not found" }), {
                status: 404,
            });
        }
        return new Response(JSON.stringify(post), { status: 200 });
    } catch (error) {
        console.error("Failed to retrieve the property post:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to retrieve the property post",
                error: error,
            }),
            { status: 500 }
        );
    }
}
