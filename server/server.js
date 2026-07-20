import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

import connectDB from "./config/db.js";

import applicationRoutes from "./routes/applicationRoutes.js";
import authRoutes from "./routes/authRoutes.js";

import { errorHandler } from "./middleware/errorMiddleware.js";


// Connect Database
connectDB();


const app = express();


// ==============================
// Middlewares
// ==============================


// CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:8080",
  "http://localhost:8081"
];


app.use(
  cors({
    origin: function (origin, callback) {

      // Allow requests like Postman or server-to-server
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );

    },
    credentials: true
  })
);



app.use(
  express.json({
    limit: "10mb"
  })
);



app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb"
  })
);



app.use(
  morgan("dev")
);



// Static Folder for Resume Uploads

app.use(
  "/uploads",
  express.static("uploads")
);




// ==============================
// Home Route
// ==============================

app.get("/", (req,res)=>{

  res.status(200).json({

    success:true,

    message:"🚀 Internship Portal Backend Running Successfully"

  });

});




// ==============================
// API Routes
// ==============================


app.use(
  "/api/auth",
  authRoutes
);


app.use(
  "/api/applications",
  applicationRoutes
);




// ==============================
// 404 Route
// ==============================


app.use((req,res)=>{

  res.status(404).json({

    success:false,

    message:"Route Not Found"

  });

});




// ==============================
// Global Error Handler
// ==============================


app.use(errorHandler);




// ==============================
// Start Server
// ==============================


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{


console.log(`
========================================
🚀 Server Running Successfully

🌐 URL  : http://localhost:${PORT}

📦 Mode : ${process.env.NODE_ENV || "development"}

========================================
`);

});