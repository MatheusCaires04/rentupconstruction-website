import React from "react";
import BannerPage from "./../components/BannerPage";

const Contact = () => {
  return (
    <div>
      <BannerPage
        titleBanner="Contact Us"
        subtitleBanner="Get Helps & Friendly Support"
      />
      <div className="my-14 px-8">
        <form className="max-w-[1100px] mx-auto border border-borderBox shadow-box p-7 flex flex-col gap-4">
          <h1 className="mb-5 text-base md:text-lg font-medium">
            Fillup The Form
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full md:w-[50%] border border-borderBox px-2 py-1 text-sm  md:text-base text-black outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full md:w-[50%] border border-borderBox px-2 py-1 text-sm  md:text-base text-black outline-none"
            />
          </div>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className="w-full border border-borderBox px-2 py-1 text-sm  md:text-base text-black outline-none"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows="5"
            className="w-full border border-borderBox px-2 py-1 text-sm  md:text-base text-black outline-none resize-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
