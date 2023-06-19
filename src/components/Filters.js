import React, { useState } from "react";

const Filters = ({ onTypeChange, onPeriodChange }) => {
  const [type, setType] = useState("artists");
  const [period, setPeriod] = useState("1m");

  const handleTypeChange = (selectedType) => {
    setType(selectedType);
    onTypeChange(selectedType);
  };

  const handlePeriodChange = (selectedPeriod) => {
    setPeriod(selectedPeriod);
    onPeriodChange(selectedPeriod);
  };
  return (
    <div className="container mx-auto py-10">
      <div className="grid md:grid-cols-5 items-center px-2 space-y-6 md:space-y-0">
        <div className="col-span-2">
          <h2 className="text-white text-4xl font-bold">Filter you research</h2>
        </div>
        <div className="col-span-3  justify-end flex">
          <div className="grid-cols-2 grid gap-4">
            <div className="flex gap-2">
              <button
                onClick={(e) => setType("artists")}
                className="md:py-2 py-1 rounded-lg px-4 text-sm font-large"
                style={
                  type === "artists"
                    ? { backgroundColor: "#1DB954" }
                    : { backgroundColor: "#595959" }
                }
              >
                Artists
              </button>
              <button
                onClick={(e) => setType("tracks")}
                className="md:py-2 py-1 rounded-lg px-4 text-sm font-large"
                style={
                  type === "tracks"
                    ? { backgroundColor: "#1DB954" }
                    : { backgroundColor: "#595959" }
                }
              >
                Tracks
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={(e) => setPeriod("1m")}
                className="md:py-2 py-1 rounded-lg px-4 text-sm font-large"
                style={
                  period === "1m"
                    ? { backgroundColor: "#1DB954" }
                    : { backgroundColor: "#595959" }
                }
              >
                Last month
              </button>
              <button
                onClick={(e) => setPeriod("6m")}
                className="md:py-2 py-1 rounded-lg px-4 text-sm font-large"
                style={
                  period === "6m"
                    ? { backgroundColor: "#1DB954" }
                    : { backgroundColor: "#595959" }
                }
              >
                6 months
              </button>
              <button
                onClick={(e) => setPeriod("all")}
                className="md:py-2 py-1 rounded-lg px-4 text-sm font-large"
                style={
                  period === "all"
                    ? { backgroundColor: "#1DB954" }
                    : { backgroundColor: "#595959" }
                }
              >
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
