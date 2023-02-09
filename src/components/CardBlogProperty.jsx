import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

const CardBlogProperty = (props) => {
  return (
    <div className="shadow-xl group">
      <div className="overflow-hidden">
        <img
          src={props.url}
          alt="/"
          className="group-hover:scale-105 duration-200"
        />
      </div>
      <div className="px-10 py-5">
        <div className="flex justify-between items-center">
          <span className="bg-gray-100 text-orangeDark text-xs sm:text-sm font-medium px-2 py-1">
            For Rent
          </span>
          <div className="text-xl text-gray-200 hover:text-red-600 cursor-pointer duration-200">
            <AiFillHeart />
          </div>
        </div>
        <div className="flex flex-col items-start mt-3">
          <span className="text-sm sm:text-base font-medium">{props.name}</span>
          <span className="text-xs sm:text-sm text-black/70 font-medium flex items-center gap-1">
            <IoLocationSharp className="text-lg" />
            {props.address}
          </span>
        </div>
      </div>
      <div
        className="border-t-[1px] border-black/30 px-10
        py-6 flex items-center justify-between
      "
      >
        <div>
          <strong className="text-sm sm:text-lg font-extrabold bg-greenDark text-white rounded-3xl px-5 py-3">
            {props.price}
          </strong>
          <span className="font-normal text-sm ml-2">/sqft</span>
        </div>
        <strong className="text-base font-semibold">{props.typeHouse}</strong>
      </div>
    </div>
  );
};

export default CardBlogProperty;
