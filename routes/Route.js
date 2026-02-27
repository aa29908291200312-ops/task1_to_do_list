const express = require("express");
const Task = require("../models/Task");
const { createTask, getdata } = require("../controllers/taskController");
const router = express.Router();

// POST

router.post("/", createTask );


// GET
router.get("/", getdata);

module.exports = router;
