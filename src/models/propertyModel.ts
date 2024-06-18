import mongoose, { Schema, Document } from "mongoose";

interface IAddress {
  addressLine: string;
  city: string;
  stateOrCounty: string;
  zipOrPostalCode: string;
  country: string;
}

interface IPotentialHome {
  size: string;
  description: string;
}

interface IPropertyDocument {
  name: string;
  url?: string; // Optional field
}

interface IProperty extends Document {
  propertyId: string;
  title: string;
  price: string;
  propertyStatus: boolean;
  sold: boolean;
  address: IAddress;
  zoning: string;
  areaSize: number;
  gmapLink?: string; // Optional field
  overview: string;
  yearBuilt: number;
  potentialHome: IPotentialHome;
  propertyType: "Residential" | "Commercial" | "Industrial" | "Land";
  propertyDocuments: IPropertyDocument[];
  images: string[];
  description: string;
}

const propertySchema: Schema = new Schema(
  {
    propertyId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    // propertyStatus: { type: Boolean, required: true },
    sold: { type: Boolean, required: true },
    address: {
      fullAddress: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipOrPostalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    zoning: { type: String, required: true, default: "Commercial, RF 13 Lots" },
    areaSize: { type: Number, required: true, default: 105000 },
    gmapLink: { type: String },
    overview: { type: String, required: true },
    yearBuilt: { type: Number, required: true },
    potentialHome: {
      size: { type: String, required: true, default: "6,400 Sq.ft" },
      description: { type: String, required: true, default: "Multi-level" },
    },
    propertyType: {
      type: String,
      required: true,
      enum: ["Residential", "Commercial", "Industrial", "Land"],
    },
    propertyDocuments: [
      {
        name: { type: String, required: true },
        url: { type: String },
      },
    ],
    images: [{ type: String }],
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.model<IProperty>("Property", propertySchema);

export default Property;
