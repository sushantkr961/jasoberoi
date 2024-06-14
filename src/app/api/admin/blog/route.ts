import type { NextApiHandler, NextApiRequest } from "next";
import multer from "multer";
import fs from "fs";
import path from "path";

// Extend NextApiRequest to include file and other multer-specific properties
interface MulterRequest extends NextApiRequest {
  file: any;
}

// Configure storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadsDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir);
    }
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage }).single("file");

// Post handler
export const POST: NextApiHandler = (req, res) => {
  if (req.method === "POST") {
    upload(req as any, res as any, (err: any) => {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: "Multer error: " + err.message });
      } else if (err) {
        return res.status(500).json({ error: "Unknown error: " + err });
      }

      const { title, content } = req.body;
      const file = (req as MulterRequest).file
        ? (req as MulterRequest).file.filename
        : null;

      const newBlogPost = { title, content, coverPhoto: file };
      res
        .status(200)
        .json({
          message: "Blog post added successfully",
          blogPost: newBlogPost,
        });
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
};

// Config to disable body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};
