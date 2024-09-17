import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Tabs = () => {
  const { students, deleteStudent } = useContext(StudentContext);

  return (
    <div className="tabs">
      <button onClick={() => alert("Submit")}>Submit</button>
      <button onClick={() => alert("Update")}>Update</button>
      <button onClick={() => students.length && deleteStudent(students[students.length - 1].id)}>
        Delete Last Student
      </button>
    </div>
  );
};

export default Tabs;
