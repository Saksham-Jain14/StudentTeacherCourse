import React, { useEffect, useState } from "react";
import { getTeachers, addTeacher } from "../api/api";

function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [name, setName] = useState("");

  const loadData = async () => {
    const data = await getTeachers();
    setTeachers(data);
  };

  const handleAdd = async () => {
    await addTeacher(name);
    setName("");
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Teachers</h2>

      <input
        placeholder="Teacher Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Teacher</button>

      <ul>
        {teachers.map((t) => (
          <li key={t._id}>{t.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeachersPage;

