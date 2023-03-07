import React from "react";

const ServerMainPage = () => {
  return (
    <div className="w-screen p-2 flex flex-col justify-end">
      <input
        type="text"
        className="p-4 w-full rounded-lg text-[#f2f2f66c] bg-[#8a8a8cdb] focus:outline-none"
        placeholder="Message #undefined "
      />
    </div>
  );
};

export default ServerMainPage;
