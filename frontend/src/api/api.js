// src/api/api.js
import axios from "axios";

// FIXED BASE URL — do NOT add /api
const API = axios.create({
  baseURL: "https://student-teacher-backend-1pi7.onrender.com",
});

// Students
export const getStudents = () => API.get("/students");

// Teachers
export const getTeachers = () => API.get("/teachers");

// Courses
export const getCourses = () => API.get("/courses");

// Course → Students mapping
export const getCourseStudents = () => API.get("/courses-students");

// Course → Teachers mapping
export const getCourseTeachers = () => API.get("/courses-teachers");
