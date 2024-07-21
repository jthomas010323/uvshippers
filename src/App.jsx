import { useState } from "react";
import uvshippersLogo from "./assets/uvshippers-logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img
            src={uvshippersLogo}
            className="h-60 mx-auto"
            alt="UVShippers logo"
          />
        </a>
      </div>
      <h1>UVSHIPPERS</h1>
      <div className="card">
        <p>Site is currently UNDER CONSTRUCTION</p>
      </div>
      <p className="read-the-docs">Come back later!</p>
    </>
  );
}

export default App;
