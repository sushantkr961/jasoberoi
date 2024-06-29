import { connect } from "@/lib/db";
import Property from "@/models/propertyModel";
import { unlink, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { handleFileUpload } from "../../../../helpers/fileUpload";
import fs from "fs";

connect();

export async function POST(request: NextRequest) {
  try {

    const data = await request.formData();
    // console.log("FormData:", data);

    const propertyId = data.get("propertyId");
    // Check if propertyId already exists
    const existingProperty = await Property.findOne({ propertyId });
    if (existingProperty) {

      return new NextResponse(
        JSON.stringify({
          message: "Property Id Must Uniq",
          success: false,
        }),
        {
          status: 400,
        }
      );
    }

    const featured = data.get("featured");
    const hotOffer = data.get("hotOffer");
    const sale = data.get("sale");

    const title = data.get("title");
    const price = data.get("price");
    const sold = data.get("sold");
    const fullAddress = data.get("address[fullAddress]");
    const city = data.get("address[city]");
    const state = data.get("address[state]");
    const zipOrPostalCode = data.get("address[zipOrPostalCode]");
    const country = data.get("address[country]");
    const totalAmount = data.get("mortgage[totalAmount]");
    const downPayment = data.get("mortgage[downPayment]");
    const interestRate = data.get("mortgage[interestRate]");
    const loanYears = data.get("mortgage[loanYears]");
    const propertyTax = data.get("mortgage[propertyTax]");
    const insurance = data.get("mortgage[insurance]");
    const pmi = data.get("mortgage[pmi]");
    const areaSize = data.get("areaSize");
    const yearBuilt = data.get("yearBuilt");
    const propertyType = data.get("propertyType");
    const description = data.get("description");
    const gmapLink = data.get("gmapLink");
    const slider = data.get("slider");

    let additionalDetails = [];
    let index = 0;
    while (data.has(`additionalDetails[${index}][key]`)) {
      const key = data.get(`additionalDetails[${index}][key]`);
      const value = data.get(`additionalDetails[${index}][value]`);
      if (key && value) {
        additionalDetails.push({ key, value });
      }
      index++;
    }

    // Handle file uploads
    const images = await handleFileUpload(
      data.getAll("images[]"),
      "./public/uploads"
    );
    const mapImage = await handleFileUpload(
      data.getAll("mapImages[]"),
      "./public/uploads"
    );
    const singleImage = await handleFileUpload(
      data.getAll("singleImage[]"),
      "./public/uploads"
    );

    const newPost = new Property({
      propertyId,
      title,
      price,
      sold,
      slider,
      featured,
      hotOffer,
      sale,
      address: {
        fullAddress,
        city,
        state,
        zipOrPostalCode,
        country,
      },
      mortgage: {
        totalAmount,
        downPayment,
        interestRate,
        loanYears,
        propertyTax,
        insurance,
        pmi,
      },
      areaSize,
      yearBuilt,
      propertyType,
      description,
      gmapLink,
      images,
      mapImage,
      singleImage,
      additionalDetails,
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
    const page = parseInt(searchParams.get("page")!) || 1; // Default to page 1 if not provided
    const limit = parseInt(searchParams.get("limit")!) || undefined; // Default to 10 items per page if not provided

    const skip = limit ? (page - 1) * limit : 0; // Calculate skip based on limit if limit is defined

    let propertyQuery = Property.find({}).select("-sliderImage");

    if (limit) {
      propertyQuery = propertyQuery.skip(skip).limit(limit);
    }

    const propertys = await propertyQuery.exec();
    const totalCount = await Property.countDocuments(); // Total count of all documents

    // console.log(propertys);
    return NextResponse.json(
      {
        propertys,
        totalCount,
        currentPage: page,
        totalPages: limit ? Math.ceil(totalCount / limit) : 1,
      },
      { status: 200 }
    );
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

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    // console.log(4444, id);

    if (!id) {
      return new NextResponse(
        JSON.stringify({
          message: "Property ID is required",
        }),
        { status: 400 }
      );
    }

    // Retrieve the property to get image URLs
    const propertyToDelete = await Property.findById(id);
    if (!propertyToDelete) {
      return new NextResponse(
        JSON.stringify({
          message: "Property not found",
        }),
        { status: 404 }
      );
    }

    // Delete all associated images
    const imagePaths = [
      ...propertyToDelete.singleImage,
      ...propertyToDelete.images,
      ...(propertyToDelete.mapImage || []),
    ];

    // Use Promise.all to handle multiple asynchronous operations
    await Promise.all(
      imagePaths.map((imagePath) =>
        unlink(`./public${imagePath}`).catch((error) => {
          console.error(`Failed to delete image at ${imagePath}:`, error);
          // Optionally handle image deletion errors here, e.g., logging or continuing without throwing
        })
      )
    );

    const deletedProperty = await Property.findByIdAndDelete(id);

    if (!deletedProperty) {
      return new NextResponse(
        JSON.stringify({
          message: "Property not found",
        }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Property deleted successfully",
        // deletedProperty,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to delete property:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to delete property",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    // console.log(5555, id);
    const { sold } = await req.json();
    // console.log(5555, sold);

    if (!id) {
      return new NextResponse(
        JSON.stringify({ message: "Property ID is required" }),
        { status: 400 }
      );
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      id,
      { sold },
      { new: true }
    );

    if (!updatedProperty) {
      return new NextResponse(
        JSON.stringify({ message: "Property not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Property updated successfully",
        // property: updatedProperty,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to update property:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to update property",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.formData();
    const id = data.get("id") as string;
    const featured = data.get("featured");
    const hotOffer = data.get("hotOffer");
    const sale = data.get("sale");
    const title = data.get("title");
    const price = data.get("price");
    const sold = data.get("sold");
    const fullAddress = data.get("address[fullAddress]");
    const city = data.get("address[city]");
    const state = data.get("address[state]");
    const zipOrPostalCode = data.get("address[zipOrPostalCode]");
    const country = data.get("address[country]");
    const totalAmount = data.get("mortgage[totalAmount]");
    const downPayment = data.get("mortgage[downPayment]");
    const interestRate = data.get("mortgage[interestRate]");
    const loanYears = data.get("mortgage[loanYears]");
    const propertyTax = data.get("mortgage[propertyTax]");
    const insurance = data.get("mortgage[insurance]");
    const pmi = data.get("mortgage[pmi]");
    const areaSize = data.get("areaSize");
    const yearBuilt = data.get("yearBuilt");
    const propertyType = data.get("propertyType");
    const description = data.get("description");
    const gmapLink = data.get("gmapLink");
    const slider = data.get("slider");
    const propertyId = data.get("propertyId");

    const newSingleImageFiles = data.getAll("singleImage") as File[];
    const newImageFiles = data.getAll("images") as File[];

    // Validate required fields
    if (!id || !title || !price) {
      return new NextResponse(
        JSON.stringify({
          message: "ID, title, and price are required",
          success: false,
        }),
        { status: 400 }
      );
    }

    // Find existing Property
    const existingProperty = await Property.findById(id);
    if (!existingProperty) {
      return new NextResponse(
        JSON.stringify({
          message: "Property not found",
          success: false,
        }),
        { status: 404 }
      );
    }


    const propertyWithSameId = await Property.findOne({ propertyId });
    if (propertyWithSameId && propertyWithSameId?._id!.toString() !== id) {
      return new NextResponse(
        JSON.stringify({
          message: "Property Id must be unique",
          success: false,
        }),
        { status: 400 }
      );
    }

    // Signle Image
    // Array to hold all promises for image operations
    const promises: Promise<any>[] = [];
    // Handle single image update
    if (newSingleImageFiles.length > 0) {
      if (existingProperty.singleImage.length > 0) {
        if (fs.existsSync(`./public${existingProperty.singleImage}`)) {
          promises.push(unlink(`./public${existingProperty.singleImage}`));
        }
      }
      // Upload new single image
      promises.push(
        handleFileUpload(newSingleImageFiles, "./public/uploads")
          .then((uploadedSingleImages) => {
            existingProperty.singleImage = [uploadedSingleImages[0]]; // Assuming only one image is expected
          })
      );
    }

    // Handle multiple images update
    if (newImageFiles.length > 0) {
      // Delete old images if exist
      if (existingProperty.images.length > 0) {
        promises.push(
          ...existingProperty.images.map((imagePath) =>
            unlink(`./public${imagePath}`).catch((error) => {
              console.error(`Failed to delete image at ${imagePath}:`, error);
            })
          )
        );
      }
      // Upload new images
      promises.push(
        handleFileUpload(newImageFiles, "./public/uploads")
          .then((uploadedImages) => {
            existingProperty.images = uploadedImages;
          })
      );
    }


    // Wait for all promises to complete
    await Promise.all(promises);

    existingProperty.propertyId = propertyId! as string;
    existingProperty.title = title as string;
    existingProperty.price = price as string;
    existingProperty.sold = sold === 'true'; // Convert string to boolean
    existingProperty.slider = slider === 'true'; // Convert string to boolean
    existingProperty.address = {
      fullAddress: fullAddress as string,
      city: city as string,
      state: state as string,
      zipOrPostalCode: zipOrPostalCode as string,
      country: country as string,
    };
    existingProperty.mortgage = {
      totalAmount: totalAmount as string,
      downPayment: downPayment as string,
      interestRate: interestRate as string,
      loanYears: loanYears as string,
      propertyTax: propertyTax as string,
      insurance: insurance as string,
      pmi: pmi as string,
    };
    existingProperty.areaSize = areaSize as string;
    existingProperty.yearBuilt = yearBuilt as string;
    existingProperty.propertyType = propertyType as string;
    existingProperty.description = description as string;
    existingProperty.gmapLink = gmapLink as string;
    existingProperty.featured = featured === 'true'; // Convert string to boolean
    existingProperty.hotOffer = hotOffer === 'true'; // Convert string to boolean

    // Update additional details
    let additionalDetails = [];
    let index = 0;
    while (data.has(`additionalDetails[${index}][key]`)) {
      const key = data.get(`additionalDetails[${index}][key]`);
      const value = data.get(`additionalDetails[${index}][value]`);
      if (key && value) {
        additionalDetails.push({ key, value });
      }
      index++;
    }
    existingProperty.additionalDetails = additionalDetails.map(({ key, value }) => ({
      key: key.toString(),
      value: value.toString(),
    }));
    // Save updated Property document
    await existingProperty.save();

    return new NextResponse(
      JSON.stringify({
        message: "Property updated successfully",
        success: true,
        post: existingProperty,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating property:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Failed to update property",
        error: error.message,
        success: false,
      }),
      { status: 500 }
    );
  }
}
