const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(cors({
  origin: "*",
}));

app.use(express.json());

// ensure uploads folder exists (important for Render)
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.use("/uploads", express.static("uploads"));

/* ================= DB CONNECT ================= */

// ✅ FIXED (removed old options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ DB Error:", err);
    process.exit(1);
  });

/* ================= MODELS ================= */

const Product = mongoose.model("Product", {
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  image: String,
});

const Order = mongoose.model("Order", {
  name: String,
  phone: String,
  address: String,
  city: String,
  pincode: String,
  items: Array,
  total: Number,
  paymentMethod: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/* ================= FILE UPLOAD ================= */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* ================= ROUTES ================= */

// ROOT
app.get("/", (req, res) => {
  res.send("🚀 API is running");
});

// TEST
app.get("/test", (req, res) => {
  res.send("✅ Server is working");
});

/* ===== PRODUCTS ===== */

// Add product
app.post("/api/products", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const product = await Product.create({
      name,
      price,
      description,
      image: req.file ? req.file.filename : null,
    });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete product
app.delete("/api/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ===== ORDERS ===== */

// Save order
app.post("/api/save-order", async (req, res) => {
  try {
    const order = await Order.create({
      ...req.body,
      paymentMethod: "Cash on Delivery",
    });

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});