import React, { useState } from "react";

const Filters = () => {

  const [activeTypeFilter, setActiveTypeFilter] = useState("")
  const [timeFilter, setTimeFilter] = useState("")

  return (
    <div className="container mx-auto py-10">
      <div className="grid md:grid-cols-5 items-center px-2 space-y-6 md:space-y-0">
        <div className="col-span-2">
          <h2 className="text-white text-4xl font-bold">Filter you research</h2>
        </div>
        <div className="col-span-3  justify-end flex">
          <div className="grid-cols-2 grid gap-4">
            <div className="flex gap-2">
              <button id="artists" className="bg-[#1DB954] py-2 rounded-lg px-4 text-sm hover:bg-[#1DB954] font-large">
                Artists
              </button>
              <button id="tracks" className="bg-[#595959] p-2 rounded-lg px-4 text-sm hover:bg-[#1DB954]  font-large">
                Tracks
              </button>
            </div>
            <div className="flex gap-2">
              <button id="1m" className="bg-[#595959] py-2 rounded-lg px-4 text-sm hover:bg-[#1DB954]  font-large">
                Last month
              </button>
              <button id="6m" className="bg-[#1DB954] p-2 rounded-lg px-4 text-sm hover:bg-[#1DB954]  font-large">
                6 months
              </button>
              <button id="all" className="bg-[#595959] p-2 rounded-lg px-4 text-sm hover:bg-[#1DB954]  font-large">
                All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
