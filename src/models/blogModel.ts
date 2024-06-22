import mongoose, { Schema, Document, Model } from "mongoose";

interface IBlog extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  imageUrl: string;
}

const blogSchema: Schema<IBlog> = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    // author: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    imageUrl: { type: String, required: false },
  },
  { timestamps: true }
);

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;
