import React, { useEffect, useState } from "react";
import api from "../api/api";

function CoursesStudentsPage() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await api.get("/courses");
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Courses With Enrolled Students</h2>

      {courses.map((c) => (
        <div key={c._id} style={{ marginBottom: "20px" }}>
          <b>{c.name}</b>
          <ul>
            {c.students?.map((s) => (
              <li key={s._id}>{s.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CoursesStudentsPage;
