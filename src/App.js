import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Stats from "./pages/Stats";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(null);

  const handleTokenChange = (token) => {
    // Do something with the token, such as storing it in the parent component's state
    setToken(token);
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
