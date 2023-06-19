import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import Table from "../components/Table";

const Stats = ({ token }) => {
  // FILTERS DATA COMING FROM FILTERS COMPONENT //
  const [type, setType] = useState("artists");
  const [period, setPeriod] = useState("1m");
  const handleTypeChange = (selectedType) => {
    setType(selectedType);
  };
  const handlePeriodChange = (selectedPeriod) => {
    setPeriod(selectedPeriod);
  };
  /////////////////////////////////////////////////

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/me/top/${type}?limit=50&offset=0&time_range=${period}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          setData(result.items);
          console.log(result);
        } else {
          console.error("Failed to fetch data from Spotify API.");
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="h-screen bg-[#121212] overflow-y-auto px-4 md:px-0 pb-10">
        <Filters
          onTypeChange={handleTypeChange}
          onPeriodChange={handlePeriodChange}
        />
        <Table data={data} />
      </div>
    </>
  );
};

export default Stats;
