import React from "react";

const CardLocation = (props) => {
  return (
    <div className="pr-6 pb-6 relative">
      <img
        src={props.url}
        alt="/"
        className="z-[-1] w-[332px] h-[208px] rounded-lg"
      />
      <div className="bg-black/40 z-[10] w-[332px] h-[208px] absolute top-6 left-6 rounded-lg" />
      <div className="z-30 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white">
        <strong className="text-lg font-medium">{props.city}</strong>
        <div className="text-sm flex items-center gap-4 font-medium text-gray-300">
          <span className="flex whitespace-nowrap">{props.villas}</span>
          <span className="flex whitespace-nowrap">{props.offices}</span>
          <span className="flex whitespace-nowrap">{props.apartments}</span>
        </div>
      </div>
    </div>
  );
};

export default CardLocation;
