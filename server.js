require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port=process.env.PORT  || 5000
// routes
const router = require("./routes/route");

// middleware
app.use(express.json());
app.use("/api/tasks", router);

// DB connection
async function dbconnection() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
}

dbconnection();

// listen server
app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
