const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// POST
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({
      success: true,
      msg: "Task created successfully",
      data: task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

// GET
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      success: true,
      msg: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

module.exports = router;
