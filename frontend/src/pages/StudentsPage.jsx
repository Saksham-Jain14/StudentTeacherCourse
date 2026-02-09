import React, { useEffect, useState } from "react";
import api from "../api/api";

function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  const fetchStudents = async () => {
    const res = await api.get("/students");
    setStudents(res.data);
  };

  const addStudent = async () => {
    await api.post("/students", { name });
    setName("");
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Students</h2>

      <input 
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>

      <ul>
        {students.map((s) => (
          <li key={s._id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsPage;