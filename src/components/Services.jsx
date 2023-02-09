import React from "react";
import ContainerService from "./ContainerService";
import Title from "./Title";
import SubTitle from "./SubTitle";

const Services = () => {
  return (
    <div className="bg-ice w-full py-14 text-center px-8">
      <div className="flex flex-col items-center">
        <Title title="Featured Property Types" />
        <SubTitle subtitle="Find All Type of Property." />
        <ContainerService />
      </div>
    </div>
  );
};

export default Services;
