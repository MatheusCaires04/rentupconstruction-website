import React from "react";

import BannerPage from "../components/BannerPage";

import imageAbout from "/assets/imageAbout.jpg";

const About = () => {
  return (
    <div>
      <BannerPage
        titleBanner="About Us"
        subtitleBanner="About Us - Who We Are?"
      />
      <div className="px-8 md:px-0 max-w-[1100px] mx-auto py-14 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-[50%]">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Our Agency Story
          </h1>
          <span className="text-sm md:text-base text-black/60 font-medium">
            Check out our company story and work process'
          </span>
          <p className="text-xs md:text-sm font-medium mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            unde dignissimos modi totam sed nulla non inventore culpa autem
            nesciunt pariatur earum impedit, hic nostrum minus soluta qui,
            accusantium voluptas.
          </p>
          <p className="text-xs md:text-sm font-medium mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            provident qui, ratione veritatis delectus laborum, culpa dolores,
            dolorum quia adipisci modi inventore quasi. Nobis, assumenda. Cum
            tenetur ducimus in sapiente?
          </p>
          <button className="bg-greenDark text-white text-sm md:text-lg font-medium px-5 py-2 rounded-3xl mt-7 hover:scale-95 duration-150">
            More About Us
          </button>
        </div>
        <div className="w-full md:w-[50%] flex justify-center md:justify-end mb-5 md:mb-0">
          <img src={imageAbout} alt="/" className="w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default About;
