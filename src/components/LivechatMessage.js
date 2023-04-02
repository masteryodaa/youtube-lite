import React from "react";
import { BiUserCircle } from "react-icons/bi";

const LivechatMessage = ({ name, msg }) => {
  return (
    <div className="livechat-message text-white flex cursor-default mb-4">
      <BiUserCircle className="text-4xl mx-4 livepic" />
      <div className="text-sm flex w-[fit-content]">
        <div className="flex flex-wrap">
          <span className="font-bold mr-2 livename">{name}</span>
          {msg}
        </div>
      </div>
    </div>
  );
};

export default LivechatMessage;
