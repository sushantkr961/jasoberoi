import mongoose, { Schema, Document, Model } from "mongoose";

interface IContact extends Document {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    lookingFor: string;
    additionalInfo: string;
}

const contactSchema: Schema<IContact> = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        lookingFor: { type: String, required: true },
        additionalInfo: { type: String, required: true },
    },
    { timestamps: true }
);

const Contact: Model<IContact> =
    mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);

export default Contact;
