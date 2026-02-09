import React, { useEffect, useState } from "react";
import api from "../api/api";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");

  const fetchCourses = async () => {
    const res = await api.get("/courses");
    setCourses(res.data);
  };

  const addCourse = async () => {
    await api.post("/courses", { name });
    setName("");
    fetchCourses();
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Courses</h2>

      <input 
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addCourse}>Add Course</button>

      <ul>
        {courses.map((c) => (
          <li key={c._id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesPage;
