import React from "react";

const Filters = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-2 bg-red-200">
        <div className="bg-purple-200 flex gap-2 justify-end mr-6">
          <button className="bg-cyan-200 p-3 rounded-lg px-10">Artists</button>
          <button className="bg-orange-200 p-3 rounded-lg px-10">Tracks</button>
        </div>
        <div className="bg-green-200 flex gap-2 justify-start mr-6">
          <button className="bg-cyan-200 p-3 rounded-lg px-10">6 months</button>
          <button className="bg-orange-200 p-3 rounded-lg px-10">All</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
