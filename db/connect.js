import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const connectDB = (url) => {
  return mongoose.connect(url);
};
// db.on("error", (err) => console.log(err));
// db.once("open", () => console.log("Connected to MongoDB"));
