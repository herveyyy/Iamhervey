"use client";

import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";

const Usernav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuClass, setMenuClass] = useState("h-24");
  const openMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div
        className={`${
          showMenu
            ? "h-10 flex-col flex sticky top-0 z-10 overflow-hidden border-b border-gray-800 duration-700 w-full backdrop-blur-md bg-black/70 md:h-10"
            : "h-[200px] flex-col flex sticky top-0 z-10 overflow-hidden border-b border-gray-800 duration-700 w-full backdrop-blur-md bg-black/70  md:h-10"
        } h-0`}
      >
        {/* WideScreen */}
        <div className=" w-full backdrop-blur-md bg-black/70  h-10 border-b border-gray-800   flex justify-between duration-700">
          <div className=" md:w-[20%] w-full flex md:justify-center md:p-0 p-4 justify-start items-center border-r border-gray-800 ">
            <Typography variant="h6">My Portfolio</Typography>
          </div>
          <div className="w-[80%] gap-x-10 md:flex justify-end hidden">
            <div className="flex ">
              <a
                href="#Introduction"
                className="border-r border-gray-800 flex items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500"
              >
                <Typography className=" !font-light flex items-center justify-center">
                  Introduction
                </Typography>
              </a>
              <a
                href="#Projects"
                className="border-r border-gray-800 flex items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500"
              >
                <Typography className=" !font-light flex items-center justify-center">
                  Projects
                </Typography>
              </a>
              <a
                href="#Certificates"
                className="border-r border-gray-800 flex items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500"
              >
                <Typography className=" !font-light flex items-center justify-center">
                  Certificates
                </Typography>
              </a>
              <a
                href="#Contact"
                className=" border-gray-800 flex items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500"
              >
                <Typography className=" !font-light flex items-center justify-center">
                  Contact Me
                </Typography>
              </a>
            </div>
          </div>
          <div className="md:hidden border-l border-gray-800 flex items-center justify-center ">
            <div className="w-12 flex items-center justify-center border-r border-gray-800 h-full">
              V
            </div>
            <div
              onClick={openMenu}
              className="w-12 flex items-center justify-center border-r border-gray-800 h-full hover:bg-white hover:text-black duration-500 cursor-pointer"
            >
              =
            </div>
          </div>
          <div className=" text-center w-32 lg:border-l border-l-0 hidden  md:flex items-center justify-center  border-gray-800 h-full">
            Download CV
          </div>
        </div>

        {/* PHONE SCREEN */}
        <div className=" md:hidden block duration-700">
          <a
            onClick={openMenu}
            href="#Introduction"
            className="border-r border-gray-800 flex items-center px-4 w-full h-10 border-b hover:bg-gray-100 hover:text-black duration-500"
          >
            <Typography className=" !font-light flex items-center ">
              Introduction
            </Typography>
          </a>
          <a
            onClick={openMenu}
            href="#Projects"
            className="border-r border-gray-800 flex items-center px-4 w-full h-10 border-b hover:bg-gray-100 hover:text-black duration-500"
          >
            <Typography className=" !font-light flex items-center ">
              Projects
            </Typography>
          </a>
          <a
            onClick={openMenu}
            href="#Certificates"
            className="border-r border-gray-800 flex items-center px-4 w-full h-10 border-b hover:bg-gray-100 hover:text-black duration-500"
          >
            <Typography className=" !font-light flex items-center ">
              Certificates
            </Typography>
          </a>
          <a
            onClick={openMenu}
            href="#Contact"
            className="border-r border-gray-800 flex items-center px-4 w-full h-10 border-b hover:bg-gray-100 hover:text-black duration-500"
          >
            <Typography className=" !font-light flex items-center ">
              Contact Me
            </Typography>
          </a>
        </div>
      </div>
    </>
  );
};

export default Usernav;
