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
    } else {
      setToken(token);
    }
  }, []);

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
