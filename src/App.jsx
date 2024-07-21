import { useState } from "react";
import uvshippersLogo from "./assets/uvshippers-logo.png";
import upsLogo from "./assets/ups-logo-png-transparent.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a target="_blank">
          <img
            src={uvshippersLogo}
            className="h-60 mx-auto"
            alt="UVShippers logo"
          />
        </a>
      </div>
      <h1>UNIVERSAL SHIPPERS NOW OPEN</h1>
      <div>
        <img src={upsLogo} className="logo" />
        <h2> Authorized UPS Shipping Center</h2>
      </div>
      <div className="card">
        <h3>
          Come visit us at{" "}
          <span style={{ textDecoration: "underline" }}>
            2246 Victory Blvd, Staten Island, NY 10314
          </span>
        </h3>
      </div>
      <p className="read-the-docs">Site is currently UNDER CONSTRUCTION</p>
    </>
  );
}

export default App;
