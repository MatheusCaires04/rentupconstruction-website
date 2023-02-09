import React from "react";

import BannerPage from "../components/BannerPage";
import ContainerService from "./../components/ContainerService";

const Services = () => {
  return (
    <div>
      <BannerPage
        titleBanner="Services"
        subtitleBanner="Services -All Services"
      />
      <div className="mt-10 mb-20">
        <ContainerService />
      </div>
    </div>
  );
};

export default Services;
