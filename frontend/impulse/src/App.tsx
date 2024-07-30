import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from "./components/Container/Container";
import UpdateTask from "./components/Form/UpdateTask";

function App() {
  

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <Container/> */}
      <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/update/:id" element={<UpdateTask />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
