import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import Table from "../components/Table";

const Stats = ({ token }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          setData(result.items);
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
        <Filters />
        <Table data={data} />
      </div>
    </>
  );
};

export default Stats;
