import React from "react";

const Table = () => {
  return (
    <div className="mx-auto container">
      <div className="grid grid-cols-4 gap-2 bg-[#595959] px-6 rounded h-20">
        <div className="flex gap-4 items-center">
          <span className="text-4xl text-[#1DB954]">#1</span>
          <img src="https://i.scdn.co/image/ab6761610000e5eb1c81ee037386e46e8ed081f3" alt="" className="h-16 rounded-lg"/>
        </div>
        <div className="col-span-2 bg-cyan-200"></div>
        <span>Lorem</span>
      </div>
    </div>
  );
};

export default Table;
