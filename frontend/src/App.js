import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentsPage from "./pages/StudentsPage";
import TeachersPage from "./pages/TeachersPage";
import CoursesPage from "./pages/CoursesPage";
import CoursesTeachersPage from "./pages/CoursesTeachersPage";
import CoursesStudentsPage from "./pages/CoursesStudentsPage";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Student Teacher Course Management</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link style={{ marginRight: "15px" }} to="/students">Students</Link>
          <Link style={{ marginRight: "15px" }} to="/teachers">Teachers</Link>
          <Link style={{ marginRight: "15px" }} to="/courses">Courses</Link>
          <Link style={{ marginRight: "15px" }} to="/course-teachers">Courses & Teachers</Link>
          <Link to="/course-students">Courses & Students</Link>
        </nav>

        <Routes>
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course-teachers" element={<CoursesTeachersPage />} />
          <Route path="/course-students" element={<CoursesStudentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;