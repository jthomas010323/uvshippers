import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
