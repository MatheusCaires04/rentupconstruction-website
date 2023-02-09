import React from "react";

import imageBanner from "/assets/bannerPage.jpg";

const BannerPage = (props) => {
  return (
    <div className="w-full px-8 pt-20 pb-14 relative h-56">
      <img
        src={imageBanner}
        alt="/"
        className="absolute top-0 left-0 w-full h-full object-cover bg-center bg-cover z-[-2]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]" />
      <div className="z-10 text-white max-w-[1100px] mx-auto">
        <span className="text-lg font-medium">{props.titleBanner}</span>
        <h1 className="text-2xl md:text-4xl font-extrabold">
          {props.subtitleBanner}
        </h1>
      </div>
    </div>
  );
};

export default BannerPage;
