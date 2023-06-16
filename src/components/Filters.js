import React from "react";

const Filters = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-5 items-center px-2">
        <div className="col-span-3">
          <h2 className="text-white text-3xl font-bold">Filter you research</h2>
        </div>
        <div className="col-span-2">
          <div className="grid-cols-2 grid gap-20">
            <div className="flex gap-2">
              <button className="bg-[#595959] py-2 rounded-lg px-4 text-sm">
                Artists
              </button>
              <button className="bg-[#595959] p-2 rounded-lg px-4 text-sm">
                Tracks
              </button>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#595959] py-2 rounded-lg px-4 text-sm">
                Last month
              </button>
              <button className="bg-[#595959] p-2 rounded-lg px-4 text-sm">
                6 months
              </button>
              <button className="bg-[#595959] p-2 rounded-lg px-4 text-sm">
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
