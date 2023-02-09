import React from "react";

const Questions = () => {
  return (
    <div className="bg-greenDark w-full px-8 py-14">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row text-white justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Do You Have Questions?
          </h1>
          <span className="mt-2 text-sm md:text-base flex">
            We'll help you to grow your career and growth.
          </span>
        </div>
        <button className="mt-5 md:mt-0 border-2 border-white bg-transparent text-white text-xl font-bold rounded-3xl px-10 py-2 hover:scale-95 duration-150">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default Questions;
