import React, { useEffect, useState } from "react";
import api, { getStudents, addStudent } from "../api/api";

function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  const loadData = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleAdd = async () => {
    await addStudent(name);
    setName("");
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Students</h2>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Student</button>

      <ul>
        {students.map((s) => (
          <li key={s._id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsPage;
