import React from "react";

import Logo from "/assets/logo-light.png";

const Footer = () => {
  return (
    <div className="bg-greyLight px-8 pt-14">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-wrap pb-14">
          <div className="w-full lg:w-[50%]">
            <a href="#">
              <img src={Logo} alt="/" className="w-40" />
            </a>
            <h2 className="text-lg md:text-2xl text-white font-bold mt-2 mb-6">
              Do You Need Help With Anything?
            </h2>
            <span className="text-white/60 text-xs sm:text-sm md:text-base w-[90%] flex">
              Receive updates, hot deals, tutorials, discounts sent straignt in
              your inbox every month
            </span>
            <form className="mt-2 w-full md:w-[80%] flex">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full sm:w-[50%] lg:w-full text-base px-2 py-1 outline-none rounded-l-lg"
              />
              <button className="px-3 bg-greenDark text-white font-medium rounded-r-lg">
                Subscribe
              </button>
            </form>
          </div>
          <ul className="w-full sm:w-[80%] lg:w-[50%] mx-auto mt-10 lg:mt-0 flex justify-between">
            <div>
              <li className="text-white text-lg md:text-xl font-medium mb-5">
                LAYOUTS
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Home Page
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                About Page
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Service Page
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Property Page
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Contact Page
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium">
                Single Blog
              </li>
            </div>
            <div>
              <li className="text-white text-lg md:text-xl font-medium mb-5">
                ALL SECTIONS
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Headers
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Features
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Attractive
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Testimonials
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Videos
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium">
                Footers
              </li>
            </div>
            <div>
              <li className="text-white text-lg md:text-xl font-medium mb-5">
                COMPANY
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                About
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Blog
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Pricing
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Affiliate
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium mb-2">
                Login
              </li>
              <li className="text-white/60 text-sm md:text-base font-medium">
                Changelog
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-gray-100/50 py-5 text-center text-white text-base md:text-lg">
        © 2021 RentUP. Designd By Matheus Bini.
      </div>
    </div>
  );
};

export default Footer;
