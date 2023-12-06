import express from "express";
import http from "http";
import tasks from "./routes/tasks.js";
import { connectDB } from "./db/connect.js";
import dotenv from "dotenv";
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const server = express();
    server.set("trust proxy", 1);
    server.use(
      cors({
        origin: "https://blingoose.net",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
      })
    );

    // Application-level middleware functions
    server.use(express.static("./public"));
    server.use(express.json());

    // Route-specific middleware functions
    server.use("/api/v1/tasks", tasks);

    // Error handling middleware function
    server.use(errorHandlerMiddleware);

    // Optional "not found" middleware function
    server.use(notFound);

    http.createServer(server).listen(PORT, function () {
      console.info("Server is listening on:", this.address());
    });
  } catch (error) {
    console.log(error);
  }
};

start();
