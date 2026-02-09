// src/api/api.js

const BASE_URL = "https://student-teacher-backend-1pi7.onrender.com";

// 🔹 Fetch all students
export const fetchStudents = async () => {
  const response = await fetch(`${BASE_URL}/students`);
  return response.json();
};

// 🔹 Fetch all teachers
export const fetchTeachers = async () => {
  const response = await fetch(`${BASE_URL}/teachers`);
  return response.json();
};

// 🔹 Fetch all courses
export const fetchCourses = async () => {
  const response = await fetch(`${BASE_URL}/courses`);
  return response.json();
};

// 🔹 Fetch course → teachers mapping
export const fetchCourseTeachers = async () => {
  const response = await fetch(`${BASE_URL}/courses-teachers`);
  return response.json();
};

// 🔹 Fetch course → students mapping
export const fetchCourseStudents = async () => {
  const response = await fetch(`${BASE_URL}/courses-students`);
  return response.json();
};

