import React from "react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import BlogProperty from "../components/BlogProperty";
import Awards from "../components/Awards";
import Locations from "../components/Locations";
import FeaturesAgents from "../components/FeaturesAgents";
import Pricings from "../components/Pricings";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <BlogProperty />
      <Awards />
      <Locations />
      <FeaturesAgents />
      <Pricings />
    </div>
  );
};

export default Home;
