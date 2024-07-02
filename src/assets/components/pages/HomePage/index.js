import React from "react";
import Header from "../../partial/Header";
import Hero from "../../partial/Hero";
import Client from "../../partial/Client";
import Features from "../../partial/Features";
import Pricing from "../../partial/Pricing";
import Footer from "../../partial/Footer";
import { Fade } from "react-awesome-reveal";

const HomePage = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Fade cascade>
          <Hero />
          <Client />
          <Features />
          <Pricing />
        </Fade>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;