import React from "react";
import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div className="p-7 border border-gray-900 shadow-xl shadow-gray-50/5 rounded-lg bg-white/5 backdrop-blur-sm ">
      <div className="rounded-full overflow-hidden w-full bg-white/90 backdrop-blur-md ">
        {/* Image component */}
        <Image
          src={"/images/hervey.png"}
          width={400}
          height={400}
          alt="me"
          className=""
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
