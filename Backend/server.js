import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// dotenv config
dotenv.config();

// mongo db connection
connectDB();

// rest object
const app = express();

// cors -- connecting backend to the frontend
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true, limit: "15kb" }));

// cookie parser
app.use(cookieParser());

// routes

// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "Server running",
//     });
// });

import userRoutes from "./routes/user.routes.js";
app.use("/api/v1/user", userRoutes);
import adminRoutes from "./routes/admin.routes.js";
app.use("/api/v1/admin", adminRoutes);
import doctorRoutes from "./routes/doctor.router.js";
app.use("/api/v1/doctor", doctorRoutes);

const port = process.env.PORT || 8080;
// listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
