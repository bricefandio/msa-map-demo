import fs from "fs";
import path from "path";
import url from "url";
import "../db.js";
import Garage from "../models/Garage.js";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../data/garages.json");

async function seed() {
  const raw = fs.readFileSync(dataPath, "utf8");
  const items = JSON.parse(raw);
  await Garage.deleteMany({});
  await Garage.insertMany(items);
  console.log(`✅ Seeded ${items.length} garages.`);
  process.exit(0);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
