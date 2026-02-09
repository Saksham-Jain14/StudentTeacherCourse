const BASE_URL = "https://student-teacher-backend-1pi7.onrender.com";

// -------- STUDENTS --------
export const getStudents = () =>
  fetch(`${BASE_URL}/students`).then((res) => res.json());

export const addStudent = (name) =>
  fetch(`${BASE_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

// -------- TEACHERS --------
export const getTeachers = () =>
  fetch(`${BASE_URL}/teachers`).then((res) => res.json());

export const addTeacher = (name) =>
  fetch(`${BASE_URL}/teachers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

// -------- COURSES --------
export const getCourses = () =>
  fetch(`${BASE_URL}/courses`).then((res) => res.json());

export const addCourse = (name) =>
  fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

// -------- COURSE → STUDENTS MAP -------
export const getCourseStudents = () =>
  fetch(`${BASE_URL}/courses-students`).then((res) => res.json());

// -------- COURSE → TEACHERS MAP -------
export const getCourseTeachers = () =>
  fetch(`${BASE_URL}/courses-teachers`).then((res) => res.json());




