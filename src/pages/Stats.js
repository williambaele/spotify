import React from "react";
import Filters from "../components/Filters";
import Table from "../components/Table";

const Stats = () => {
  return (
    <>
      <div className="h-screen bg-[#121212]">
        <Filters />
        <Table/>
      </div>
    </>
  );
};

export default Stats;
