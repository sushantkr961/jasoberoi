import { connect } from "@/lib/db";
import Blog from "@/models/blogModel";
import Contact from "@/models/contactModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const firstName = data.get("firstName");
        const lastName = data.get("lastName");
        const email = data.get("email");
        const phone = data.get("phone");
        const lookingFor = data.get("lookingFor");
        const additionalInfo = data.get("additionalInfo");

        if (!firstName || !lastName || !email || !phone || !lookingFor || !additionalInfo) {
            return new Response(
                JSON.stringify({
                    message: "all are required",
                    success: false,
                }),
                { status: 400 }
            );
        }


        try {
            const newPost = new Contact({
                firstName,
                lastName,
                email,
                phone,
                lookingFor,
                additionalInfo
            });

            await newPost.save();
            return new NextResponse(
                JSON.stringify({
                    message: "Thank You For Contacting Us",
                    success: true,
                    post: newPost,
                }),
                { status: 201 }
            );
        } catch (error: any) {
            return new NextResponse(
                JSON.stringify({
                    message: "Failed to add conatct",
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
        const page = parseInt(searchParams.get("page")!) || 1;
        const limit = parseInt(searchParams.get("limit")!) || undefined;

        const skip = limit ? (page - 1) * limit : 0;

        let contactsQuery = Contact.find({});

        if (limit) {
            contactsQuery = contactsQuery.skip(skip).limit(limit);
        }

        const contacts = await contactsQuery.exec();
        const totalCount = await Contact.countDocuments();

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
        console.error("Failed to retrieve contacts:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to retrieve contacts",
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
        const contactToDelete = await Contact.findById(id);
        if (!contactToDelete) {
            return new NextResponse(
                JSON.stringify({
                    message: "Contact not found",
                }),
                { status: 404 }
            );
        }

        // If the blog has an associated image, delete it from the filesystem


        // Proceed to delete the blog from the database
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return new NextResponse(
                JSON.stringify({
                    message: "Failed to delete Contact info",
                }),
                { status: 500 }
            );
        }

        return new NextResponse(
            JSON.stringify({
                message: "ContactInfo deleted successfully",
            }),
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Failed to delete ContactInfo:", error);
        return new NextResponse(
            JSON.stringify({
                message: "Failed to delete ContactInfo",
                error: error.message,
            }),
            { status: 500 }
        );
    }
}
