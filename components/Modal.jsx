import React from "react";
import { FaX } from "react-icons/fa6";

const Modal = ({ isOpen, isClose, data }) => {
  return (
    <div
      className={` absolute  z-50  inset-0 h-screen w-screen backdrop-blur-sm bg-white/5 p-4 duration-500 ${
        isOpen ? " opacity-100 z-50 visible" : "-z-50 opacity-0  invisible"
      }`}
    >
      <div className="bg-black w-full h-full rounded-lg p-3 overflow-hidden">
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
        <div className="w-full h-full overflow-hidden overflow-y-scroll">
          {/* Picture */}
          <div className="h-"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
