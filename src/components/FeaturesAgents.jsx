import React from "react";

import Title from "./Title";
import SubTitle from "./SubTitle";
import { dataAgents } from "./Data/DataAgents";
import CardAgents from "./CardAgents";

const FeaturesAgents = () => {
  return (
    <div className="bg-ice px-8 py-14">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
        <Title title="Our Featured Agents" />
        <SubTitle subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
        <div className="flex flex-wrap justify-center gap-[25px]">
          {dataAgents.map((item) => {
            return (
              <CardAgents
                key={item.id}
                url={item.url}
                address={item.city}
                name={item.name}
                list={item.list}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesAgents;
