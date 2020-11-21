/** @format */

import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Team from "../Team";
import Different from "../Different";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Team />
      <Different />
      <Footer />
    </>
  );
}

export default Home;
