import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft, FaArrowRightArrowLeft, FaX } from "react-icons/fa6";

const Modal = ({ isOpen, isClose, data }) => {
  return (
    <div
      className={` absolute  z-50  inset-0 h-screen w-screen backdrop-blur-sm bg-white/5 p-4 duration-500 ${
        isOpen ? " opacity-100 z-50 visible" : "-z-50 opacity-0  invisible"
      }`}
    >
      <div className="bg-black w-full h-full rounded-lg p-3 overflow-hidden ">
        <div className=" flex justify-end w-full items-center">
          <div className="flex justify-start w-[90%]  ">
            <div className="border-r border-gray-800 pr-2">{data.title}</div>
          </div>
          <div className="w-[10%]">
            <div className="flex justify-end">
              <button className="text-gray-800" onClick={() => isClose()}>
                <FaX className="" />
              </button>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="w-full h-full overflow-hidden overflow-y-scroll no-scrollbar">
          {/* Picture */}
          <div className="h-[50vh] desktop:h-[70vh] flex justify-between gap-x-2 p-2 ">
            <div className=" w-[3%] relative h-full flex items-center justify-center">
              <button className="p-2 hover:text-black hover:bg-white duration-700 rounded-lg">
                <FaArrowLeft />
              </button>
            </div>
            <div className=" w-[94%]  relative desktop:h-full flex items-center justify-center overflow-hidden">
              <div className="object-cover ">
                <Image
                  src={data.coverImage}
                  width={1000}
                  height={500}
                  alt="project image"
                />
              </div>
            </div>
            <div className=" w-[3%]  relative h-full flex items-center justify-center">
              <button className="p-2 hover:text-black hover:bg-white duration-700 rounded-lg">
                <FaArrowRight />
              </button>
            </div>
          </div>
          {/* details */}
          <div className=" w-full">
            <div className="w-full flex  justify-center">
              <p className="font-mono border border-gray-800 bg-white  text-center text-black text-3xl">
                Project Information
              </p>
            </div>
            <div className="desktop:flex flex-none mt-8">
              <div className="border border-gray-800 w-full">Project Name</div>
              <div className="border border-gray-800 w-full">Status</div>
            </div>
            <div className="desktop:flex flex-none ">
              <div className="border border-gray-800 w-full">
                Project Developement Time:
              </div>
              <div className="border border-gray-800 w-full">
                Deployment Link:
              </div>
            </div>
            <div className="text-center w-full my-2">Project details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
