import React, { useEffect, useState } from "react";
import api, { getCourses, addCourse } from "../api/api";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");

  const loadData = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  const handleAdd = async () => {
    await addCourse(name);
    setName("");
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Courses</h2>

      <input
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Course</button>

      <ul>
        {courses.map((c) => (
          <li key={c._id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesPage;

