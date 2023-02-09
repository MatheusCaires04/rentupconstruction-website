import React from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

import Title from "./Title";
import SubTitle from "./SubTitle";

const Pricings = () => {
  return (
    <div className="px-8 py-14 w-full">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <Title title="Select Your Package" />
        <SubTitle subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores" />
        <div className="flex flex-wrap items-center justify-center gap-[25px] mt-10">
          <div className="w-[300px] md:w-[350px] border divide-borderBox shadow-lg py-8 px-4 flex flex-col items-center">
            <strong className="text-2xl md:text-3xl">Basic</strong>
            <strong className="text-xl my-3">
              $<strong className="text-5xl ml-1">29</strong>
            </strong>
            <span className="text-sm md:text-base text-gray-600">
              per user, per month
            </span>
            <ul className="mb-6 mt-8 flex flex-col gap-3">
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                99.5% Uptime Guarantee
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                120GB CDN Bandwidth
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                5GB Cloud Storage
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineClose
                  size={33}
                  className="bg-slate-300 text-red-600 p-2 rounded-full"
                />{" "}
                Personal Help Support
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineClose
                  size={33}
                  className="bg-slate-300 text-red-600 p-2 rounded-full"
                />{" "}
                Enterprise SLA
              </li>
            </ul>
            <button className="border-2 border-greenDark px-10 py-2 text-greenDark text-lg font-bold rounded-3xl hover:text-white hover:bg-greenDark duration-150">
              Start Basic
            </button>
          </div>
          <div className="w-[300px] md:w-[350px] border divide-borderBox shadow-lg py-8 px-4 flex flex-col items-center">
            <span className="bg-orangeDark px-10 py-3 rounded-3xl text-base font-medium text-white mb-4">
              Best Value
            </span>
            <strong className="text-2xl md:text-3xl">Starndard</strong>
            <strong className="text-xl my-3">
              $<strong className="text-5xl ml-1">59</strong>
            </strong>
            <span className="text-sm md:text-base text-gray-600">
              per user, per month
            </span>
            <ul className="mb-6 mt-8 flex flex-col gap-3">
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                99.5% Uptime Guarantee
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                150GB CDN Bandwidth
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                10GB Cloud Storage
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                Personal Help Support
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineClose
                  size={33}
                  className="bg-slate-300 text-red-600 p-2 rounded-full"
                />{" "}
                Enterprise SLA
              </li>
            </ul>
            <button className="border-2 border-greenDark px-10 py-2 text-white text-lg font-bold rounded-3xl bg-greenDark hover:text-greenDark hover:bg-white duration-150">
              Start Standard
            </button>
          </div>
          <div className="w-[300px] md:w-[350px] border divide-borderBox shadow-lg py-8 px-4 flex flex-col items-center">
            <strong className="text-2xl md:text-3xl">Platinum</strong>
            <strong className="text-xl my-3">
              $<strong className="text-5xl ml-1">79</strong>
            </strong>
            <span className="text-sm md:text-base text-gray-600">
              2 user, per month
            </span>
            <ul className="mb-6 mt-8 flex flex-col gap-3">
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                100% Uptime Guarantee
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                200GB CDN Bandwidth
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                20GB Cloud Storage
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                Personal Help Support
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <AiOutlineCheck
                  size={33}
                  className="bg-slate-300 text-greenDark p-2 rounded-full"
                />{" "}
                Enterprise SLA
              </li>
            </ul>
            <button className="border-2 border-greenDark px-10 py-2 text-greenDark text-lg font-bold rounded-3xl hover:text-white hover:bg-greenDark duration-150">
              Start Platinum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricings;
