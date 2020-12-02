/** @format */

import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/fitness.mp4" autoPlay loop muted />
      <h1>Ready To Simplify Your Life?</h1>
      <div className="hero-btns">
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

export default HeroSection;
