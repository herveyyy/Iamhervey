"use client";

import { Typography } from "@material-tailwind/react";
import React from "react";

const Usernav = () => {
  return (
    <div className="w-full backdrop-blur-md bg-black/50 h-10 border-b border-gray-800 flex justify-between  ">
      <div className="w-[20%] flex justify-center items-center border-r border-gray-800 ">
        <Typography variant="h6">My Portfolio</Typography>
      </div>
      <div className="w-[80%] gap-x-10 flex justify-center ">
        <div className="flex ">
          <button className="border-r border-gray-800 flex items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500">
            <Typography className=" !font-light flex items-center justify-center">
              Introduction
            </Typography>
          </button>
          <button className="border-r border-gray-800 flex items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500">
            <Typography className=" !font-light flex items-center justify-center">
              Projects
            </Typography>
          </button>
          <button className="border-r border-gray-800 flex items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500">
            <Typography className=" !font-light flex items-center justify-center">
              Certificates
            </Typography>
          </button>
          <button className=" border-gray-800 flex items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500">
            <Typography className=" !font-light flex items-center justify-center">
              Contact Me
            </Typography>
          </button>
        </div>
      </div>
      <button className="border-l border-gray-800 flex items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500">
        <Typography className=" !font-light flex items-center justify-center">
          Download CV
        </Typography>
      </button>
    </div>
  );
};

export default Usernav;
