"use client";

import React from "react";
import { FaXTwitter } from "react-icons/fa6";

import { FaFacebook, FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="  border flex justify-center border-gray-900 shadow-white/5 rounded-lg bg-white/5 backdrop-blur-sm ">
      <div className=" flex justify-evenly  p-2 w-96 h-14">
        <button
          className="hover:bg-blue-900   w-14 p-2 rounded-md  flex justify-center items-center
         shadow-lg shadow-blue-gray-0 duration-500
          hover:-translate-y-1 hover:ring-blue-200  focus:backdrop-blur-sm  hover:shadow-blue-gray-700
          "
        >
          <FaFacebook className="w-6 h-6" />
        </button>
        <button
          className="hover:bg-blue-gray-900   w-14 p-2 rounded-md  flex justify-center items-center
         shadow-lg shadow-blue-gray-0 duration-500
          hover:-translate-y-1 hover:ring-blue-200 focus:backdrop-blur-sm hover:shadow-blue-gray-700
          "
        >
          <FaGithub className="w-6 h-6" />
        </button>
        <button
          className=" hover:bg-white/20 w-14 p-2 rounded-md  flex justify-center items-center
         shadow-lg shadow-blue-gray-0 duration-500
          hover:-translate-y-1 hover:ring-gray-200 focus:backdrop-blur-sm hover:shadow-gray-700
          "
        >
          <FaLinkedin className="w-6 h-6" />
        </button>
        <button
          className=" hover:bg-red-900  w-14 p-2 rounded-md  flex justify-center items-center
         shadow-lg shadow-blue-gray-0 duration-500
          hover:-translate-y-1 hover:ring-gray-200 focus:backdrop-blur-sm hover:shadow-red-600
          "
        >
          <FaGoogle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Socials;
