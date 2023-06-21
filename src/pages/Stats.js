import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import Table from "../components/Table";

const Stats = ({ token }) => {
  const [loading, setLoading] = useState(true);

  // FILTERS DATA COMING FROM FILTERS COMPONENT //
  const [type, setType] = useState("artists");
  const [period, setPeriod] = useState("short_term");
  const handleTypeChange = (selectedType) => {
    setType(selectedType);
  };
  const handlePeriodChange = (selectedPeriod) => {
    setPeriod(selectedPeriod);
  };

  // DATA FETCHING ///
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/me/top/${type}?limit=30&offset=0&time_range=${period}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const result = await response.json();
          setData(result.items);
        } else {
          console.error("Failed to fetch data from Spotify's API.");
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, period, token]);


  // USER PROFILE DATA FETCHING //
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const result = await response.json();
          setProfileData(result);
        } else {
          console.error("Failed to fetch profile data from Spotify API.");
        }
      } catch (error) {
        console.error("An error occurred while fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      <div className="h-screen bg-[#121212] overflow-y-auto px-4 md:px-0 pb-10">
        <Filters
          onTypeChange={handleTypeChange}
          onPeriodChange={handlePeriodChange}
          profileData={profileData}
        />
    {!loading && <Table data={data} type={type} />}
      </div>
    </>
  );
};

export default Stats;
