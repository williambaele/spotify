import React from "react";
import Header from "../components/Header";

const Stats = () => {
  return (
    <>
      <div className="min-h-screen bg-[#121212]">
        <Header />
        <div className="mx-auto container">
          <div className="grid md:grid-cols-2">
            <div className="bg-green-400 min-h-screen	">a</div>
            <div className="bg-red-400"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
