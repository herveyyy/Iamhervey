import ProfilePicture from "@/components/ProfilePicture";
import Socials from "@/components/Socials";
import Image from "next/image";
import React from "react";
import Stacks from "@/components/Stacks";

export const Introduction = () => {
    return (
        <div
            className="h-screen border-b border-gray-800  z-0 flex  w-full  "
            id="Introduction"
        >
            <div className=" flex justify-center   w-full h-full ">
                <div className="w-full md:mt-24 mt-12 h-full  ">
                    {/* Contents */}
                    <div className="flex md:flex-row flex-col-reverse   gap-y-8 items-center h-full   ">
                        {/* Content 1 */}
                        <div className="lg:w-[70%] md:w-1/2 w-full h-full  max-desktop:py-20 md:py-20   desktop:py-0 duration-700">
                            <div className="md:mt-20 mt-0 ">
                                <div className=" bg-white hover:bg-transparent hover:text-white duration-500 cursor-default text-black h-full translate-x-0  md:-translate-y-16 ">
                                    <p className="font-mono text-2xl sm:text-2xl md:text-7xl desktop:text-9xl  text-center ">
                                        Hi! I am hervey
                                    </p>
                                </div>
                                <div>
                                    <p className=" md:text-xl desktop:text-3xl  laptop:text-2xl font-thin text-center  translate-x-0  lg:mt-2 md:-translate-y-14">
                                        I am a Full Stack Developer
                                    </p>
                                </div>
                            </div>

                            <div className="laptop:hidden absolute bottom-0 z-50  w-full  sm:p-4 sm:pb-8 tablet:px-32 ">
                                <Socials />
                            </div>
                            <div className=" md:mt-0 md:h-auto h-full md:flex-none  flex  pb-28 ">
                                <Stacks />
                            </div>
                        </div>
                        {/* Content 2 */}
                        <div className=" md:pr-10 lg:pr-0 pr-0 w-full  h-auto md:h-full  md:w-1/2   items-center flex flex-col gap-y-10">
                            {/* Profile Card */}
                            <div className=" laptop:-translate-y-5  laptop:w-[25rem] laptop:h-[25rem] desktop:w-[30rem] desktop:h-[30rem] max-desktop:w-auto max-desktop:h-auto  w-64 h-64 md:w-80 md:h-80 duration-1000 ">
                                <ProfilePicture
                                    pictureURL={"/images/hervey.png"}
                                />
                            </div>
                            <div className="laptop:block hidden ">
                                <Socials />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Introduction;
