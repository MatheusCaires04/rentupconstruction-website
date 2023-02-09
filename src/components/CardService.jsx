import React from "react";

const CardService = (props) => {
  return (
    <div className="w-72 sm:w-48 flex flex-col items-center shadow-lg py-14 cursor-pointer hover:scale-105 duration-200">
      <img src={props.icon} alt="/" className="w-20" />
      <strong className="font-bold text-base">{props.title}</strong>
      <span className="font-medium text-black/80 text-xs">{props.desc}</span>
    </div>
  );
};

export default CardService;
