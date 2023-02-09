import React from "react";

import Title from "./Title";
import SubTitle from "./SubTitle";
import ContainerBlogProperty from "./ContainerBlogProperty";

const BlogProperty = () => {
  return (
    <div className="text-center px-8 py-14">
      <div className="flex flex-col items-center">
        <Title title="Recent Property Listed" />
        <SubTitle subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
        <ContainerBlogProperty />
      </div>
    </div>
  );
};

export default BlogProperty;
