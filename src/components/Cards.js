/** @format */

import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>WHAT WE OFFER</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/flexibility.jpg"
              text="Going on vacation? No problem. Traveling for work? We'll help you out. Want to skip the gym and exercise at home? You got it. No matter what you’ve got going on in your life, we'll adjust your plan so you can stay consistent and continue getting great results."
              label="Flexibility"
              path="/mind"
            />
            <CardItem
              src="images/care.jpg"
              text="Becoming You is a family. We’ll remember your dog’s name; we’ll send you gifts for big life events; and we’ll always be here to listen, no matter what’s going on in your life. It’s an honor to be apart of your journey, and we want you to feel supported in every way."
              label="Care"
              path="/soul"
            />
            <CardItem
              src="images/realism.jpg"
              text="Want to have ice cream in your diet? We'll make it happen. Love microbrews or Italian wines? We won't deprive you of the stuff you love. Instead of crazy-strict dieting rules, we'll work together to create a simple plan that gets great results—without making you the “weird person” at dinner."
              label="Realism"
              path="/soul"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/goals.jpg"
              text="At Becoming You, our goal is to help you perform better at the activities that matter most to you. It doesn’t matter to us whether you’re looking to keep pace with your marathoner friends, keep up on the executive fast track, or keep ahead of your active toddler. Our program is specific to the demands of your life"
              label="Demand-Specific Goals"
              path="/body"
            />
            <CardItem
              src="images/mindfulness.jpg"
              text="Mindfulness can transform your life and be profoundly healing. Science has shown how systematically practicing awareness can affect the entire body, including the DNA and the brain, in ways that enhance well-being and clarity. It can reduce depression and anxiety, help to improve interpersonal relationships and enable us to act effectively under stressful conditions. We can be free from the suffering brought on by our automatic thoughts and assumptions."
              label="Mindfulness"
              path="/mind"
            />
            {/* <CardItem
              src="images/team-1.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/mind"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
