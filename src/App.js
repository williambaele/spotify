import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Stats from "./pages/Stats";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("spotifyToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Stats /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
