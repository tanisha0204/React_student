import React from "react";
import Sidebar from "./components/Sidebar";
import StudentForm from "./components/StudentForm";
import Tabs from "./components/Tabs";
import { StudentProvider } from "./context/StudentContext";
import "./App.css";

const App = () => {
  return (
    <StudentProvider>
      <div className="app">
        <Sidebar />
        <div className="main">
          <StudentForm />
          <Tabs />
        </div>
      </div>
    </StudentProvider>
  );
};

export default App;
