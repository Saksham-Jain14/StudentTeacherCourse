import React, { useEffect, useState } from "react";
import api from "../api/api";

function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [name, setName] = useState("");

  const fetchTeachers = async () => {
    const res = await api.get("/teachers");
    setTeachers(res.data);
  };

  const addTeacher = async () => {
    await api.post("/teachers", { name });
    setName("");
    fetchTeachers();
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div>
      <h2>Teachers</h2>

      <input 
        placeholder="Teacher Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addTeacher}>Add Teacher</button>

      <ul>
        {teachers.map((t) => (
          <li key={t._id}>{t.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeachersPage;
