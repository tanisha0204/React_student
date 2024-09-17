import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Sidebar = () => {
  const { students } = useContext(StudentContext);

  return (
    <div className="sidebar">
      <h2>Saved Students</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>{student.name}</strong> - {student.age} years
            <ul>
              {student.subjects.map((subject, i) => (
                <li key={i}>
                  {subject.name}: {subject.marks} Marks
                </li>
              ))}
            </ul>
            <div>Total Marks: {student.totalMarks}</div>
            <div>Percentage: {student.percentage}%</div>
            <div>Grade: {student.grade}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
