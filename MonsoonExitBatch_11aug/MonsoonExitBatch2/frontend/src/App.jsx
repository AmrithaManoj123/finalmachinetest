
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar
import Home from "./components/Home"; // Assuming Home component exists
import Add from "./components/Add"; // Import Add component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
