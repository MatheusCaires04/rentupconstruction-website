import React from "react";

const SubTitle = ({ subtitle }) => {
  return (
    <h3 className="text-sm sm:text-base text-black/60 font-medium pt-3 pb-6 w-[90%] md:w-[70%] text-center">
      {subtitle}
    </h3>
  );
};

export default SubTitle;
