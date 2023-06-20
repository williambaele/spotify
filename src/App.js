import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Stats from "./pages/Stats";
import { useEffect, useState } from "react";

function App() {
  // TOKEN GRAB //
  const [token, setToken] = useState(null);
  const handleTokenChange = (freshToken) => {
    setToken(freshToken);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

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
          console.log(result);
        } else {
          console.error("Failed to fetch profile data from Spotify API.");
        }
      } catch (error) {
        console.error("An error occurred while fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  console.log(profileData);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login onTokenChange={handleTokenChange} />}
          />
          <Route path="/stats" element={<Stats token={token} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
