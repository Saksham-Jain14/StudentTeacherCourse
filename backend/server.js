// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Routes
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// API Routes
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/courses", courseRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Student Teacher Course API Running...");
});

// PORT for Render (VERY IMPORTANT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
