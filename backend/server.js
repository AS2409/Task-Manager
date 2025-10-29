import dotenv from "dotenv"
import express, { json } from "express";
import cors from "cors";
import path from "path";

const app = express();

//Middleware to handle CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

//Middleware
app.use(json());

//Routes
//app.use("/api/auth", authRoutes);
//app.use("/api/users", userRoutes);
//app.use("/api/tasks", taskRoutes);
//app.use("/api/reporst", reporstRoutes);
//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runnign on port ${PORT}`));