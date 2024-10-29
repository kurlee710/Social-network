import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import thoughtRoutes from "./routes/thoughtRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/socialNetworkDB")
  .then(() => console.log("Connected to MongoDB"));

app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
