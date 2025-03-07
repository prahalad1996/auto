import express from "express";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import addProduct  from "./controllers/productController.js";

const app = express();

// Database Connection
mongoose.connect('mongodb://localhost:27017/autoPart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error", err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ensure "uploads/" directory exists
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer Storage Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Create Product Route
app.post("/api/products", upload.single("image"), addProduct);

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
