import express from "express";
import Garage from "../models/Garage.js";

const router = express.Router();

// GET /api/garages?region=Île-de-France
router.get("/", async (req, res) => {
  try {
    const { region } = req.query;
    const filter = region ? { region } : {};
    const data = await Garage.find(filter).lean();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Cannot fetch garages" });
  }
});

export default router;
