import mongoose, { Schema, Document } from "mongoose";

interface IBlog extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
}

const blogSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  // author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Blog = mongoose.model<IBlog>("Blog", blogSchema);
export default Blog;
