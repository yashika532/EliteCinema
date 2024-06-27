import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
const VideoTitle = () => {
  return (
    <div className="w-screen aspect-video absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold">this is title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed
        dolorem illum?
      </p>
      <div className="mt-8 flex ">
        <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80 ">
          <FaPlay  size="24px" />
          <span className="ml-1">Play</span>
        </button>
        <button className="flex items-center mx-2 px-6 py-2 bg-gray-300 bg-opacity-60 text-black rounded-md hover:bg-opacity-80">
          <IoInformationCircle size="24px" />
          <span className="ml-1">Watch More</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
