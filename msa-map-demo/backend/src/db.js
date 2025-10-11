import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/msa_map_demo";

mongoose.set("strictQuery", true);

mongoose
  .connect(uri, { dbName: uri.split('/').pop() })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
