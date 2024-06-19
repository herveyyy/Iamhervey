import ProfilePicture from "@/components/ProfilePicture";
import Socials from "@/components/Socials";
import Image from "next/image";
import React from "react";

export const Introduction = () => {
  return (
    <div
      className="h-screen border-b border-gray-800  z-0 flex w-full"
      id="Introduction"
    >
      <div className=" flex justify-center  items-top w-full ">
        <div className="w-full  md:mt-10">
          <div className="   w-full h-16 py-2 border-gray-800">
            {/* <Typography variant="h2" className="font-extralight text-center">
              INTRODUCTION
            </Typography> */}
          </div>
          {/* Contents */}
          <div className="flex md:flex-row flex-col-reverse  gap-y-8 items-center ">
            {/* Content 1 */}
            <div className="lg:w-[70%] md:w-1/2 w-full">
              <div>
                <div className=" bg-white text-black h-full translate-x-0  md:-translate-y-16 ">
                  <p className="font-mono text-2xl sm:text-2xl md:text-7xl desktop:text-9xl  text-center ">
                    Hi! I am hervey
                  </p>
                </div>
                <div>
                  <p className=" md:text-xl desktop:text-3xl  laptop:text-2xl font-thin text-center  translate-x-0  lg:mt-2 md:-translate-y-14">
                    your future fullstack developer.
                  </p>
                </div>
              </div>
              <div className="md:hidden absolute bottom-0 w-full p-4  pb-8 ">
                <Socials />
              </div>
            </div>
            {/* Content 2 */}
            <div className=" md:pr-10 lg:pr-0 pr-0 w-full   md:w-1/2   items-center flex flex-col gap-y-10">
              {/* Profile Card */}
              <div className=" laptop:w-[30rem] laptop:h-[30rem] max-desktop:w-auto max-desktop:h-auto  w-64 h-64 md:w-80 md:h-80    duration-1000 ">
                <ProfilePicture />
              </div>
              <div className="md:block hidden ">
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
