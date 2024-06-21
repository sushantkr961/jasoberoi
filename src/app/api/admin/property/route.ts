import { connect } from "@/lib/db";
import Property from "@/models/propertyModel";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    console.log("FormData:", data);

    // Extract specific properties
    const propertyId = data.get("propertyId");
    const title = data.get("title");
    const price = data.get("price");
    const sold = data.get("sold");
    const fullAddress = data.get("address[fullAddress]");
    const city = data.get("address[city]");
    const state = data.get("address[state]");
    const zipOrPostalCode = data.get("address[zipOrPostalCode]");
    const country = data.get("address[country]");
    const zoning = data.get("zoning");
    const areaSize = data.get("areaSize");
    const overview = data.get("overview");
    const yearBuilt = data.get("yearBuilt");
    const potentialHomeSize = data.get("potentialHome[size]");
    const potentialHomeDescription = data.get("potentialHome[description]");
    const propertyType = data.get("propertyType");
    const description = data.get("description");
    const gmapLink = data.get("gmapLink");

    // Handle file uploads
    let images = [];
    const files = data.getAll("images[]");
    for (let file of files) {
      if (file instanceof File) {
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const fileName = file.name.replace(/\s+/g, "_");
        const path = `./public/uploads/${fileName}`;
        await writeFile(path, buffer);
        images.push(`/uploads/${fileName}`);
      }
    }

    // Create a new Property instance and save to database
    const newPost = new Property({
      propertyId,
      title,
      price,
      sold,
      address: {
        fullAddress,
        city,
        state,
        zipOrPostalCode,
        country,
      },
      zoning,
      areaSize,
      overview,
      yearBuilt,
      potentialHome: {
        size: potentialHomeSize,
        description: potentialHomeDescription,
      },
      propertyType,
      description,
      gmapLink,
      images,
    });
    try {
      await newPost.save();
      return new NextResponse(
        JSON.stringify({
          message: "Property added successfully",
          success: true,
          post: newPost,
        }),
        {
          status: 201,
        }
      );
    } catch (error: any) {
      return new NextResponse(
        JSON.stringify({
          message: "Failed to add property",
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
    const page = parseInt(searchParams.get('page')!) || 1; // Default to page 1 if not provided
    const limit = parseInt(searchParams.get('limit')!) || undefined; // Default to 10 items per page if not provided

    const skip = limit ? (page - 1) * limit : 0; // Calculate skip based on limit if limit is defined

    let propertyQuery = Property.find({});

    if (limit) {
      propertyQuery = propertyQuery.skip(skip).limit(limit);
    }

    const propertys = await propertyQuery.exec();
    const totalCount = await Property.countDocuments(); // Total count of all documents

    console.log(propertys);
    return NextResponse.json({
      propertys,
      totalCount,
      currentPage: page,
      totalPages: limit ? Math.ceil(totalCount / limit) : 1, 
    }, { status: 200 });

    
  } catch (error: any) {
    console.error("Failed to retrieve property:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to retrieve property",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}