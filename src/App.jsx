import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Construction from "./pages/Construction";
import Random from "./pages/Random";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Construction />} />
      <Route path="/random" element={<Random />} />
    </Routes>
  );
}

export default App;
