import React, { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentForm = () => {
  const { addStudent, updateStudent } = useContext(StudentContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [subjects, setSubjects] = useState([
    { name: "Subject 1", marks: 0 },
    { name: "Subject 2", marks: 0 },
    { name: "Subject 3", marks: 0 },
    { name: "Subject 4", marks: 0 },
    { name: "Subject 5", marks: 0 },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(null);

  const calculateTotal = () =>
    subjects.reduce((acc, subject) => acc + Number(subject.marks), 0);

  const calculatePercentage = (totalMarks) => (totalMarks / 500) * 100;

  const calculateGrade = (percentage) => {
    if (percentage >= 90) return "A";
    if (percentage >= 80) return "B";
    if (percentage >= 70) return "C";
    return "D";
  };

  const handleSubmit = () => {
    const totalMarks = calculateTotal();
    const percentage = calculatePercentage(totalMarks);
    const grade = calculateGrade(percentage);

    const newStudent = {
      id: Date.now(),
      name,
      age,
      subjects,
      totalMarks,
      percentage,
      grade,
    };

    if (isEditing) {
      updateStudent(id, newStudent);
      setIsEditing(false);
    } else {
      addStudent(newStudent);
    }

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setSubjects([
      { name: "Subject 1", marks: 0 },
      { name: "Subject 2", marks: 0 },
      { name: "Subject 3", marks: 0 },
      { name: "Subject 4", marks: 0 },
      { name: "Subject 5", marks: 0 },
    ]);
  };

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  return (
    <div className="form-container">
      <h2>{isEditing ? "Edit" : "Add"} Student</h2>

      
      <label>Name: </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

    
      <label>Age: </label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      
      {subjects.map((subject, index) => (
        <div className="subject-container" key={index}>
          <div>
            <label>Subject {index + 1} Name: </label>
            <input
              value={subject.name}
              onChange={(e) =>
                handleSubjectChange(index, "name", e.target.value)
              }
            />
          </div>
          <div>
            <label>Marks: </label>
            <input
              type="number"
              value={subject.marks}
              onChange={(e) =>
                handleSubjectChange(index, "marks", e.target.value)
              }
            />
          </div>
        </div>
      ))}

    
      <div>
        <strong>Total Marks: </strong> {calculateTotal()}
      </div>
      <div>
        <strong>Percentage: </strong> {calculatePercentage(calculateTotal())}%
      </div>
      <div>
        <strong>Grade: </strong> {calculateGrade(calculatePercentage(calculateTotal()))}
      </div>

      
      <button onClick={handleSubmit}>
        {isEditing ? "Update" : "Submit"}
      </button>
    </div>
  );
};

export default StudentForm;
