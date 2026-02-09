import React, { useEffect, useState } from "react";
import api from "../api/api";

function CoursesTeachersPage() {
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
      <h2>Courses With Assigned Teachers</h2>

      {courses.map((c) => (
        <div key={c._id} style={{ marginBottom: "20px" }}>
          <b>{c.name}</b>
          <ul>
            {c.teachers?.map((t) => (
              <li key={t._id}>{t.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CoursesTeachersPage;
