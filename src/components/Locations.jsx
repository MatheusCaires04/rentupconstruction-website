import React from "react";

import Title from "./Title";
import SubTitle from "./SubTitle";
import { dataCity } from "./Data/DataCitys";
import CardLocation from "./CardLocation";

const Locations = () => {
  return (
    <div className="w-full py-14 text-center px-8">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <Title title="Explore By Location" />
        <SubTitle subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataCity.map((item) => {
            return (
              <CardLocation
                key={item.id}
                url={item.url}
                city={item.city}
                villas={item.villas}
                offices={item.offices}
                apartments={item.apartments}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Locations;
