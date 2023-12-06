import mongoose from "mongoose";

export const connectDB = (url) => {
  return mongoose.connect(url);
};
// db.on("error", (err) => console.log(err));
// db.once("open", () => console.log("Connected to MongoDB"));
