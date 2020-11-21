/** @format */

import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Some Meaningful Blurb...</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/body.jpg"
              text="WHAT "
              label="Nutrition"
              path="/body"
            />
            <CardItem
              src="images/soul.jpg"
              text="WE "
              label="Wellness"
              path="/soul"
            />
            <CardItem
              src="images/mind.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Health"
              path="/mind"
            />
          </ul>
          <h2>WHAT WE OFFER</h2>
        </div>
      </div>
    </div>
  );
}

export default Cards;
