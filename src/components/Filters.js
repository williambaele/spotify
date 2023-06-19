import React, { useState } from "react";

const Filters = () => {
  const [activeTypeFilter, setActiveTypeFilter] = useState("artists");
  const [timeFilter, setTimeFilter] = useState("1m");

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
                onClick={(e) => setActiveTypeFilter("artists")}
                className="py-2 rounded-lg px-4 text-sm font-large"
                style={
                  activeTypeFilter === "artists"
                    ? { backgroundColor: "#1DB954" }
                    : { backgroundColor: "#595959" }
                }
              >
                Artists
              </button>
              <button
                onClick={(e) => setActiveTypeFilter("tracks")}
                className="py-2 rounded-lg px-4 text-sm font-large"
                style={
                  activeTypeFilter === "tracks"
                    ? { backgroundColor: "#1DB954" }
                    : { backgroundColor: "#595959" }
                }
              >
                Tracks
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={(e) => setTimeFilter("1m")}
                className="py-2 rounded-lg px-4 text-sm font-large"
                style={
                  timeFilter === "1m"
                    ? { backgroundColor: "#1DB954" }
                    : { backgroundColor: "#595959" }
                }
              >
                Last month
              </button>
              <button
                onClick={(e) => setTimeFilter("6m")}
                className="py-2 rounded-lg px-4 text-sm font-large"
                style={
                  timeFilter === "6m"
                    ? { backgroundColor: "#1DB954" }
                    : { backgroundColor: "#595959" }
                }
              >
                6 months
              </button>
              <button
                onClick={(e) => setTimeFilter("all")}
                className="py-2 rounded-lg px-4 text-sm font-large"
                style={
                  timeFilter === "all"
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
