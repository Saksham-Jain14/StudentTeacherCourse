// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://student-teacher-backend-1pi7.onrender.com",
});

// Students
export const getStudents = () => api.get("/students");
export const addStudent = (name) => api.post("/students", { name });

// Teachers
export const getTeachers = () => api.get("/teachers");
export const addTeacher = (name) => api.post("/teachers", { name });

// Courses
export const getCourses = () => api.get("/courses");
export const addCourse = (name) => api.post("/courses", { name });

// Mappings
export const getCourseStudents = () => api.get("/courses-students");
export const getCourseTeachers = () => api.get("/courses-teachers");

export default api;





