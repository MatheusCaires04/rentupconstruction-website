import React from "react";
import { FaTrophy, FaBriefcase, FaLightbulb, FaHeart } from "react-icons/fa";

const Awards = () => {
  return (
    <div className="w-full px-8 py-14 bg-blueDark text-white">
      <div className="max-w-[1060px] mx-auto flex flex-col text-center items-center">
        <h3 className="text-base text-greenDark font-medium">Our Awards</h3>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium w-[90%] sm:[80%] md:w-[60%]">
          Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services
        </h1>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <div className="w-[250px] flex flex-col items-center gap-3">
            <FaTrophy
              className="p-5 bg-greyLight rounded-tr-3xl rounded-bl-3xl"
              size={70}
            />
            <span className="text-2xl md:text-4xl font-bold">32 M</span>
            <span className="text-xs md:text-sm">Blue Burmin Award</span>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-3">
            <FaBriefcase
              className="p-5 bg-greyLight rounded-tr-3xl rounded-bl-3xl"
              size={70}
            />
            <span className="text-2xl md:text-4xl font-bold">46 M</span>
            <span className="text-xs md:text-sm">Mimo X11 Award</span>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-3">
            <FaLightbulb
              className="p-5 bg-greyLight rounded-tr-3xl rounded-bl-3xl"
              size={70}
            />
            <span className="text-2xl md:text-4xl font-bold">47 M</span>
            <span className="text-xs md:text-sm">Australian UGC Award</span>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-3">
            <FaHeart
              className="p-5 bg-greyLight rounded-tr-3xl rounded-bl-3xl"
              size={70}
            />
            <span className="text-2xl md:text-4xl font-bold">40 M</span>
            <span className="text-xs md:text-sm">IITCA Green Award</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
