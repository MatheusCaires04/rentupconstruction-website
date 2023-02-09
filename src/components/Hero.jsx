import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-bgBanner bg-cover bg-center w-full h-[calc(100vh-5rem)]">
      <div className="w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl sm:text-6xl md:text-7xl text-center font-medium w-full md:w-[50%]">
          Search Your Next Home
        </h1>
        <span className="text-sm md:text-base text-white/80 font-medium mt-5 mb-14">
          Find new & featured property located in your local city.
        </span>
        <form className="bg-white w-[80%] rounded-lg text-black grid grid-cols-1 sm:grid-cols-3  md:grid-cols-4">
          <div className="pr-2 pl-2 md:pl-6 py-2 md:py-6">
            <label className="text-sm md:text-base">City/Street</label>
            <input
              className="outline-none px-2 py-[0.5px] text-sm border-2 rounded-lg w-[90%]"
              type="text"
              name="city"
              id="city"
            />
          </div>
          <div className="px-2 py-1 md:py-6 border-l-2 border-r-[1px]">
            <label className="text-sm md:text-base">Property Type</label>
            <input
              className="outline-none px-2 py-[0.5px] text-sm border-2 rounded-lg w-[90%]"
              type="text"
              name="propertytype"
              id="propertytype"
            />
          </div>
          <div className="px-2 py-1 md:py-6 border-l-[1px] border-r-2">
            <label className="text-sm md:text-base">Price Range</label>
            <input
              className="outline-none px-2 py-[0.5px] text-sm border-2 rounded-lg w-[90%]"
              type="text"
              name="pricerange"
              id="pricerange"
            />
          </div>
          <div className="pl-2 pr-2 md:pr-6 py-2 md:py-6 flex justify-center md:justify-between items-center gap-2 md:gap-0 sm:col-span-3 md:col-span-1">
            <span className="text-sm md:text-base">Advanced Filter</span>
            <button className="bg-greenDark text-white text-base md:text-xl rounded-lg p-3 md:p-4 hover:scale-105 duration-200">
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
