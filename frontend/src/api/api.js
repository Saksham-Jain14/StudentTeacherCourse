// src/api/api.js
const BASE_URL = "https://student-teacher-backend-1pi7.onrender.com";

// Fetch Students
export const getStudents = async () => {
  const res = await fetch(`${BASE_URL}/students`);
  return res.json();
};

// Add Student
export const addStudent = async (name) => {
  const res = await fetch(`${BASE_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
};

// Fetch Teachers
export const getTeachers = async () => {
  const res = await fetch(`${BASE_URL}/teachers`);
  return res.json();
};

// Add Teacher
export const addTeacher = async (name) => {
  const res = await fetch(`${BASE_URL}/teachers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
};

// Fetch Courses
export const getCourses = async () => {
  const res = await fetch(`${BASE_URL}/courses`);
  return res.json();
};

// Add Course
export const addCourse = async (name) => {
  const res = await fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
};

// Course → Teachers Mapping
export const fetchCourseTeachers = async () => {
  const res = await fetch(`${BASE_URL}/courses-teachers`);
  return res.json();
};

// Course → Students Mapping
export const fetchCourseStudents = async () => {
  const res = await fetch(`${BASE_URL}/courses-students`);
  return res.json();
};





