import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft, FaArrowRightArrowLeft, FaX } from "react-icons/fa6";

const Modal = ({ isOpen, isClose, data }) => {
    return (
        <div
            className={` absolute  z-50  inset-0 h-screen w-screen backdrop-blur-sm bg-white/5 p-4 duration-500 ${
                isOpen
                    ? " opacity-100 z-50 visible"
                    : "-z-50 opacity-0  invisible"
            }`}
        >
            <div className="bg-black w-full h-full rounded-lg p-3 overflow-hidden ">
                <div className=" flex justify-end w-full items-center">
                    <div className="flex justify-start w-[90%]  ">
                        <div className="border-r border-gray-800 pr-2">
                            {data.title}
                        </div>
                    </div>
                    <div className="w-[10%]">
                        <div className="flex justify-end">
                            <button
                                className="text-gray-800"
                                onClick={() => isClose()}
                            >
                                <FaX className="" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="w-full h-full overflow-hidden overflow-y-scroll no-scrollbar">
                    {/* Picture */}
                    <div className="h-[50vh] desktop:h-[50vh] flex justify-between gap-x-2 p-2 ">
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
                    <div className=" w-full bg-white/10 pb-12 rounded-xl  p-2">
                        <div className="w-full flex  justify-center">
                            <p className="font-mono  border-gray-800 bg-white  text-center text-black text-3xl">
                                Project Information
                            </p>
                        </div>
                        <div className="desktop:flex flex-none mt-8 ">
                            <div className=" w-full flex gap-2 items-center lg:flex-col lg:items-start border-gray-800 border-b">
                                <p className="font-mono border-gray-800 ">
                                    Project Title:
                                </p>
                                <p className="font-mono text-xs">
                                    {data.title}
                                </p>
                            </div>
                            <div className=" font-mono border-gray-800 w-full text-xs border-b">
                                Status: {data.status}
                            </div>
                        </div>
                        <div className="desktop:flex flex-none font-mono mt-2">
                            <div className=" border-gray-800 w-full text-xs">
                                Role: {data?.role?.frontEnd ? "Front End" : ""}
                                {" | "}
                                {data?.role?.backEnd ? "Back End" : ""} {" | "}
                                {data?.role?.fullStack ? "Full Stack" : ""}
                                {" | "}
                                {data?.role?.engineered
                                    ? "Full Stack Engineer"
                                    : ""}
                            </div>
                            <div className=" border-gray-800 w-full text-xs">
                                Deployment Link:
                                <a
                                    href={`https://${data.deploymentLink}`}
                                    target="_target"
                                    className="underline"
                                >
                                    {data.deploymentLink}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
