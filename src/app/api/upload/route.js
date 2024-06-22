// import { writeFile } from "fs/promises";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const data = await req.formData();
//   const file = data.get("file");
//   if (!file) {
//     return NextResponse.json({
//       message: "no image found",
//       success: false,
//     });
//   }
//   const byteData = await file.arrayBuffer();
//   const buffer = Buffer.from(byteData);
//   const path = `./public/uploads/${file.name}`;
//   await writeFile(path, buffer);
//   return NextResponse.json({
//     message: "file uploaded sucessfully",
//     success: true,
//   });
// }

import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export const handleFileUpload = async (files, directory) => {
  let filePaths = [];
  for (let file of files) {
    if (file instanceof File) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const ext = path.extname(file.name);
      const fileName = `${uuidv4()}${ext}`; // Generate a new name with uuid
      const filePath = path.join(directory, fileName);
      await writeFile(filePath, buffer);
      filePaths.push(`/uploads/${fileName}`); // Return the new path
    }
  }
  return filePaths;
};
