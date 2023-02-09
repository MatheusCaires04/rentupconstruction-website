import React from "react";

import CardBlogProperty from "./CardBlogProperty";
import { dataProperty } from "./Data/DataBlogProperty";

const ContainerBlogProperty = () => {
  return (
    <div className="w-[80%] sm:w-full max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {dataProperty.map((item) => {
        return (
          <CardBlogProperty
            key={item.id}
            url={item.url}
            name={item.name}
            address={item.address}
            price={item.value}
            typeHouse={item.typeHouse}
          />
        );
      })}
    </div>
  );
};

export default ContainerBlogProperty;
