import React from "react";

import BannerPage from "./../components/BannerPage";
import ContainerBlogProperty from "./../components/ContainerBlogProperty";

const Blog = () => {
  return (
    <div>
      <BannerPage titleBanner="Blog" subtitleBanner="Blog Grid - Our Blogs" />
      <div className="my-14">
        <ContainerBlogProperty />
      </div>
    </div>
  );
};

export default Blog;
