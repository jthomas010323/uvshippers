import React from "react";
import uvshippersLogo from "../assets/uvshippers-logo.png";
import upsLogo from "../assets/ups-logo-png-transparent.png";
import "../App.css";

function Construction() {
  return (
    <div className="font-bold">
      <div>
        <a target="_blank">
          <img
            src={uvshippersLogo}
            className="h-96 mb-8 mx-auto"
            alt="UVShippers logo"
          />
        </a>
      </div>
      <h1 className="my-3 text-5xl">UNIVERSAL SHIPPERS NOW OPEN</h1>
      <div className="my-5 text-xl">
        <img src={upsLogo} className="h-24 mb-2 mx-auto" />
        <h2> Authorized UPS Shipping Center</h2>
      </div>
      <div className="text-xl mt-6">
        <h3>
          Come visit us at{" "}
          <span className="underline">
            2246 Victory Blvd, Staten Island, NY 10314
          </span>
        </h3>
      </div>
      <p className="read-the-docs my-2">Site is currently UNDER CONSTRUCTION</p>
    </div>
  );
}

export default Construction;
