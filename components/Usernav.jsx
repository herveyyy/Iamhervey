"use client";

import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import Image from "next/image";
import {
  HiDownload,
  HiOutlineFingerPrint,
  HiOutlineMenu,
  HiOutlineUserCircle,
  HiOutlineQrcode,
  HiCode,
  HiOutlineAcademicCap,
  HiOutlineMail,
} from "react-icons/hi";

const Usernav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div
        className={`h-0 ${
          showMenu
            ? "h-[200px] flex-col flex absolute top-0 z-10 overflow-hidden border-b border-gray-800 duration-700 w-full backdrop-blur-md bg-black/70  md:h-10"
            : "h-10 flex-col flex absolute top-0 z-10 overflow-hidden border-b border-gray-800 duration-700 w-full backdrop-blur-md bg-black/70 md:h-10"
        } `}
      >
        {/* WideScreen */}
        <div className=" w-full backdrop-blur-md bg-black/70  h-10 border-b border-gray-800   flex justify-between duration-700">
          <div className=" md:w-[20%] w-full flex md:justify-center md:p-0 p-4 justify-start items-center  border-gray-800 ">
            <a
              onClick={openMenu}
              className="flex gap-x-2 items-center cursor-pointer"
              href="#Introduction"
            >
              <HiOutlineQrcode className="!h-7 !w-7" />
              <Typography variant="h6" className="text-center">
                Hi, I&apos;m Hervey
              </Typography>
            </a>
          </div>
          <div className="w-[80%] gap-x-10 md:flex justify-end hidden">
            <div className="flex ">
              <a
                href="#Introduction"
                className="border-x border-gray-800 flex gap-2 items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500"
              >
                <HiOutlineUserCircle className="!h-5 !w-5" />

                <Typography className=" !font-light flex items-center justify-center">
                  Introduction
                </Typography>
              </a>
              <a
                href="#Projects"
                className="border-r border-gray-800 flex gap-x-2 items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500"
              >
                <HiCode className="!h-5 !w-5" />

                <Typography className=" !font-light flex items-center justify-center">
                  Projects
                </Typography>
              </a>
              <a
                href="#Certificates"
                className="border-r border-gray-800 flex gap-x-2 items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500"
              >
                <HiOutlineAcademicCap className="!h-5 !w-5" />

                <Typography className=" !font-light flex items-center justify-center">
                  Certificates
                </Typography>
              </a>
              <a
                href="#Contact"
                className=" border-gray-800 flex gap-x-2 items-center justify-center w-32 hover:bg-gray-100 hover:text-black duration-500"
              >
                <HiOutlineMail className="!h-5 !w-5" />

                <Typography className=" !font-light flex items-center justify-center">
                  Contact Me
                </Typography>
              </a>
            </div>
          </div>
          <div className="md:hidden border-l border-gray-800 flex items-center justify-center ">
            <div className="w-12 flex items-center justify-center border-r border-gray-800 h-full">
              <HiDownload />
            </div>
            <div
              onClick={openMenu}
              className="w-12 flex items-center justify-center border-gray-800 h-full hover:bg-white hover:text-black duration-500 cursor-pointer"
            >
              <HiOutlineMenu />
            </div>
          </div>
          <div className=" text-center w-40 lg:border-l border-l-0 hidden gap-x-2 px-2  md:flex items-center justify-center cursor-pointer border-gray-800 h-full">
            <HiDownload />
            Download CV
          </div>
        </div>

        {/* PHONE SCREEN */}
        <div className=" md:hidden block duration-700">
          <a
            onClick={openMenu}
            href="#Introduction"
            className=" border-gray-800 flex gap-x-2 items-center px-4 w-full h-10 border-b hover:bg-gray-100 hover:text-black duration-500"
          >
            <HiOutlineUserCircle className="!h-5 !w-5" />
            <Typography className=" !font-light flex items-center ">
              Introduction
            </Typography>
          </a>
          <a
            onClick={openMenu}
            href="#Projects"
            className=" border-gray-800 flex gap-x-2 items-center px-4 w-full h-10 border-b hover:bg-gray-100 hover:text-black duration-500"
          >
            <HiCode className="!h-5 !w-5" />
            <Typography className=" !font-light flex items-center ">
              Projects
            </Typography>
          </a>
          <a
            onClick={openMenu}
            href="#Certificates"
            className=" border-gray-800 flex gap-x-2 items-center px-4 w-full h-10 border-b hover:bg-gray-100 hover:text-black duration-500"
          >
            <HiOutlineAcademicCap className="!h-5 !w-5" />
            <Typography className=" !font-light flex items-center ">
              Certificates
            </Typography>
          </a>
          <a
            onClick={openMenu}
            href="#Contact"
            className=" border-gray-800 flex gap-x-2 items-center px-4 w-full h-10 border-b hover:bg-gray-100 hover:text-black duration-500"
          >
            <HiOutlineMail className="!h-5 !w-5" />
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
