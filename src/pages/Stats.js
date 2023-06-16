import React from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";

const Stats = () => {
  return (
    <>
      <div className="h-screen bg-[#121212]">
        <Header />
        <div className="mx-auto container">
          <div className="grid md:grid-cols-2">
            <div className="bg-green-400 h-screen">a</div>
            <div className="bg-red-400"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
