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
  areaSize: string;
  gmapLink?: string; // Optional field
  overview: string;
  yearBuilt: number;
  potentialHome: IPotentialHome;
  propertyType: string;
  propertyDocuments: IPropertyDocument[];
  singleImage: string;
  images: string[];
  description: string;
}

const propertySchema: Schema = new Schema(
  {
    propertyId: { type: String, unique: true },
    title: { type: String },
    price: { type: String },
    sold: { type: Boolean },
    address: {
      fullAddress: { type: String },
      city: { type: String },
      state: { type: String },
      zipOrPostalCode: { type: String },
      country: { type: String },
    },
    zoning: { type: String },
    areaSize: { type: Number },
    gmapLink: { type: String },
    overview: { type: String },
    yearBuilt: { type: Number },
    potentialHome: {
      size: { type: String },
      description: { type: String },
    },
    propertyType: {
      type: String,
    },
    propertyDocuments: [
      {
        name: { type: String },
        url: { type: String },
      },
    ],
    singleImage: { type: String },
    images: [{ type: String }],
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;
