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
          <div className="flex md:flex-row flex-col-reverse items-center">
            {/* Content 1 */}
            <div className="md:w-1/2 w-full">
              <div className="md:hidden absolute bottom-0 w-full p-4  pb-8 ">
                <Socials />
              </div>
            </div>
            {/* Content 2 */}
            <div className=" md:pr-10 lg:pr-0 pr-0 w-full md:w-1/2 items-center flex flex-col gap-y-10">
              {/* Profile Card */}
              <div className=" md:w-auto md:h-auto w-64 h-64 ">
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
