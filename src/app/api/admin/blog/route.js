import multer from "multer";
import Blog from "@/models/blogModel";
import User from "@/models/userModel";
import { connect } from "@/lib/db";
import nc from "next-connect";

// Initialize database connection
connect();

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads/", // Ensure this path exists
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const handler = nc();

handler.use(upload.single("file")); // 'file' is the name of our file input field

handler.post(async (req, res) => {
  const { title, content, author } = req.body;
  const file = req.file; // Access file from multer

  console.log("File:", file);
  console.log("Body:", req.body);

  try {
    const user = await User.findOne({ username: author });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newPost = new Blog({
      title,
      content,
      author: user._id,
      imageUrl: file ? `/uploads/${file.filename}` : undefined,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Failed to add blog post:", error);
    res
      .status(500)
      .json({ message: "Failed to add blog post", error: error.message });
  }
});

handler.get(async (req, res) => {
  try {
    const posts = await Blog.find({});
    res.status(200).json(posts);
  } catch (error) {
    console.error("Failed to retrieve blog posts:", error);
    res
      .status(500)
      .json({ message: "Failed to retrieve blog posts", error: error.message });
  }
});

export default handler;
