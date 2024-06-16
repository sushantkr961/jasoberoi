import mongoose, { Schema, Document } from "mongoose";

interface IBlog extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  imageUrl: string;
}

const blogSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  // author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  imageUrl: { type: String, required: false },
});

// const Blog = mongoose.model<IBlog>("Blog", blogSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;
