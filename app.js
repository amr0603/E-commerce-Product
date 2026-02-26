require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(" DB Connected Successfully");
  } catch (error) {
    console.error(" DB Connection Failed:", error.message);
    process.exit(1); 
  }
};
connectDB();

app.use("/api", productRoutes);

app.listen(3000, () => console.log("Server Running"));
