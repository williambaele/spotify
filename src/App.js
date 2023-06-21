import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Stats from "./pages/Stats";

function App() {
  const [token, setToken] = useState(null);

  const handleTokenChange = (freshToken) => {
    setToken(freshToken);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedTokenCreationTime = localStorage.getItem("tokenCreationTime");
    const storedTokenValidity = localStorage.getItem("tokenValidity");

    if (storedToken && storedTokenCreationTime && storedTokenValidity) {
      const currentTime = Math.floor(Date.now() / 1000);
      const tokenExpirationTime =
        parseInt(storedTokenCreationTime, 10) + parseInt(storedTokenValidity, 10);

      if (currentTime < tokenExpirationTime) {
        setToken(storedToken);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenCreationTime");
        localStorage.removeItem("tokenValidity");
        setToken(null);
      }
    } else {
      setToken(null);
    }
  }, []);

  return (
    <>
      {token ? (
        <Stats token={token} />
      ) : (
        <Login onTokenChange={handleTokenChange} />
      )}
    </>
  );
}

export default App;
