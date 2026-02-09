// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://student-teacher-backend-1pi7.onrender.com",
});

// Students
export const getStudents = () => API.get("/students");
export const addStudent = (data) => API.post("/students", data);

// Teachers
export const getTeachers = () => API.get("/teachers");
export const addTeacher = (data) => API.post("/teachers", data);

// Courses
export const getCourses = () => API.get("/courses");
export const addCourse = (data) => API.post("/courses", data);

// Mapping
export const getCourseStudents = () => API.get("/courses-students");
export const getCourseTeachers = () => API.get("/courses-teachers");

// ✅ Default export is required because your pages use `import api from "../api/api"`
export default {
  getStudents,
  addStudent,
  getTeachers,
  addTeacher,
  getCourses,
  addCourse,
  getCourseStudents,
  getCourseTeachers,
};


