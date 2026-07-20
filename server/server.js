import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

import connectDB from "./config/db.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

// ==============================
// Connect Database
// ==============================

connectDB();

const app = express();

// ==============================
// CORS
// ==============================

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ==============================
// Body Parser
// ==============================

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ==============================
// Logger
// ==============================

app.use(morgan("dev"));

// ==============================
// Static Folder
// ==============================

app.use("/uploads", express.static("uploads"));

// ==============================
// Home Route
// ==============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Internship Portal Backend Running Successfully",
  });
});

// ==============================
// Health Route
// ==============================

app.get("/api", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Working Successfully",
  });
});

// ==============================
// API Routes
// ==============================

app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);

// ==============================
// 404
// ==============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// ==============================
// Global Error Handler
// ==============================

app.use(errorHandler);

// ==============================
// Server
// ==============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
========================================
🚀 Server Running Successfully

🌐 Port : ${PORT}
📦 Mode : ${process.env.NODE_ENV || "development"}

========================================
`);
});