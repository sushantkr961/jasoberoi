import mongoose, { Schema, Document, Model } from "mongoose";

interface IStoriesBlog extends Document {
    title: string;
    content: string;
    // author: mongoose.Types.ObjectId;
    singleImage: string;
    images: string[];
}

const soldStoriesSchema: Schema<IStoriesBlog> = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        singleImage: [{ type: String }],
        images: [{ type: String }],
    },
    { timestamps: true }
);

const SoldStories: Model<IStoriesBlog> =
    mongoose.models.SoldStories || mongoose.model<IStoriesBlog>("SoldStories", soldStoriesSchema);

export default SoldStories;
