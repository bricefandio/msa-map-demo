import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./db.js"; // connect to MongoDB
import garagesRouter from "./routes/garages.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, status: "healthy" });
});

app.use("/api/garages", garagesRouter);

// Regions helper for the frontend
import Garage from "./models/Garage.js";
app.get("/api/regions", async (req, res) => {
  try {
    const regions = await Garage.distinct("region");
    regions.sort((a, b) => a.localeCompare(b, "fr"));
    res.json(regions);
  } catch (e) {
    res.status(500).json({ error: "Cannot fetch regions" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
