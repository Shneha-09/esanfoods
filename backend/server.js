const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* ================= DB CONNECT ================= */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

/* ================= MODELS ================= */

// ✅ PRODUCT MODEL
const Product = mongoose.model("Product", {
  name: String,
  price: Number,
  description: String,
  image: String,
});

// ✅ ORDER MODEL
const Order = mongoose.model("Order", {
  name: String,
  phone: String,
  address: String,
  city: String,
  pincode: String,
  items: Array,
  total: Number,
  paymentMethod: String, // ✅ changed
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/* ================= FILE UPLOAD ================= */

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* ================= ROUTES ================= */

// ✅ TEST ROUTE
app.get("/test", (req, res) => {
  res.send("✅ Server is working");
});

// ➤ Add product
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

// ➤ Get all products
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ➤ Delete product
app.delete("/api/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

/* ================= ORDER (NO PAYMENT) ================= */

// ✅ SAVE ORDER (MAIN FUNCTION)
app.post("/api/save-order", async (req, res) => {
  try {
    const order = await Order.create({
      ...req.body,
      paymentMethod: "Cash on Delivery", // ✅ fixed value
    });

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET ALL ORDERS
app.get("/api/orders", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

/* ================= SERVER ================= */

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});