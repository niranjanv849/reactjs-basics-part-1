import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskOne from "./TaskOne";
import TaskTwo from "./TaskTwo";
import TaskThree from "./TaskThree";
import TaskFour from "./TaskFour";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div className="home__text">Welcome to home Page!</div>} />
          <Route path="TaskOne" element={<TaskOne />} />
          <Route path="TaskTwo" element={<TaskTwo />} />
          <Route path="TaskThree" element={<TaskThree />} />
          <Route path="TaskFour" element={<TaskFour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
