/** @format */
/** @format */

import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Different.css";

function Different() {
  return (
    <div className="different-container">
      <video src="/videos/Untitled.mp4" autoPlay loop muted />
      <h1>How WE Are Different</h1>
      <div className="different-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}

export default Different;
