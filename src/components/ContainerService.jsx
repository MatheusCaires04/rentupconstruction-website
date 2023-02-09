import React from "react";

import CardService from "./CardService";

import IconService1 from "/assets/hero/h1.png";
import IconService2 from "/assets/hero/h2.png";
import IconService3 from "/assets/hero/h3.png";
import IconService4 from "/assets/hero/h4.png";
import IconService5 from "/assets/hero/h6.png";

const ContainerService = () => {
  return (
    <div className="max-w-[1100px] mx-auto flex flex-wrap gap-[35px] justify-center mt-4">
      <CardService
        icon={IconService1}
        title="Family House"
        desc="122 Property"
      />
      <CardService
        icon={IconService2}
        title="House & Villa"
        desc="155 Property"
      />
      <CardService icon={IconService3} title="Appartment" desc="300 Property" />
      <CardService
        icon={IconService4}
        title="Office & Studio"
        desc="80 Property"
      />
      <CardService
        icon={IconService5}
        title="Villa & Condo"
        desc="80 Property"
      />
    </div>
  );
};

export default ContainerService;
