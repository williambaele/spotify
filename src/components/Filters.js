import React, { useState } from "react";

const Filters = ({ onTypeChange, onPeriodChange, profileData }) => {
  const [type, setType] = useState("artists");
  const [period, setPeriod] = useState("short_term");

  const handleTypeChange = (selectedType) => {
    setType(selectedType);
    onTypeChange(selectedType);
  };

  const handlePeriodChange = (selectedPeriod) => {
    setPeriod(selectedPeriod);
    onPeriodChange(selectedPeriod);
  };

  // USER'S DATA //
  console.log(profileData)
  // const pseudo = profileData.display_name
  // const picture = profileData.images[0].url

  return (
    <div className="container mx-auto py-10">
      <div className="grid md:grid-cols-5 items-center px-2 space-y-6 md:space-y-0">
        <div className="col-span-2">
          {/* <h2 className="text-white text-4xl font-bold">{pseudo}</h2> */}
          {/* <img src={picture} alt="" /> */}
        </div>
        <div className="col-span-3  justify-end flex">
          <div className="grid-cols-2 grid gap-4">
            <div className="flex gap-2">
              <button
                onClick={(e) => handleTypeChange("artists")}
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
                onClick={(e) => handleTypeChange("tracks")}
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
                onClick={(e) => handlePeriodChange("short_term")}
                className="md:py-2 py-1 rounded-lg px-4 text-sm font-large"
                style={
                  period === "short_term"
                    ? { backgroundColor: "#1DB954" }
                    : { backgroundColor: "#595959" }
                }
              >
                Last month
              </button>
              <button
                onClick={(e) => handlePeriodChange("medium_term")}
                className="md:py-2 py-1 rounded-lg px-4 text-sm font-large"
                style={
                  period === "medium_term"
                    ? { backgroundColor: "#1DB954" }
                    : { backgroundColor: "#595959" }
                }
              >
                6 months
              </button>
              <button
                onClick={(e) => handlePeriodChange("long_term")}
                className="md:py-2 py-1 rounded-lg px-4 text-sm font-large"
                style={
                  period === "long_term"
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
