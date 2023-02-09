import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const CardAgents = (props) => {
  return (
    <div className="p-5 border border-borderBox w-[300px] md:w-[350px] rounded-md hover:shadow-lg duration-300 cursor-pointer bg-white">
      <div className="flex items-start">
        <span className="inline-block text-white text-base md:text-base font-medium bg-orangeDark px-6 py-3 rounded-3xl">
          {props.list}
        </span>
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="rounded-full w-32 h-32 overflow-hidden border-[5px] border-ice flex items-center justify-center relative">
          <img src={props.url} alt="/" className="w-24 h-24 rounded-full" />
          <FaCheckCircle className="absolute right-2 text-blue-600" />
        </div>
        <span className="flex items-center gap-1 text-gray-400 text-xs md:text-sm font-medium">
          <IoLocationSharp />
          {props.address}
        </span>
        <span className="text-sm md:text-base font-medium">{props.name}</span>
        <div className="flex items-center gap-2 my-8">
          <FaFacebookF
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-gray-600 duration-200"
            size={30}
          />
          <FaLinkedin
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-gray-600 duration-200"
            size={30}
          />
          <FaTwitter
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-gray-600 duration-200"
            size={30}
          />
          <FaInstagram
            className="p-2 rounded-full bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-gray-600 duration-200"
            size={30}
          />
        </div>
        <div className="text-white flex items-center gap-10">
          <a
            href="#"
            className="bg-greenDark rounded-md px-4 py-2 flex items-center gap-2 hover:opacity-90 duration-150"
          >
            <FaEnvelope size={20} /> Message
          </a>
          <a
            href="#"
            className="bg-black rounded-md px-4 py-[0.625rem] flex hover:opacity-90 duration-150"
          >
            <FaPhone size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardAgents;
