import mongoose from "mongoose";

const GarageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    region: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Garage", GarageSchema);
