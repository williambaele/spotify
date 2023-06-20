import Login from "./pages/Login";
import Stats from "./pages/Stats";
import { useEffect, useState } from "react";

function App() {
  // TOKEN GRAB //
  const [token, setToken] = useState(null);
  const handleTokenChange = (freshToken) => {
    setToken(freshToken);
    localStorage.setItem("token", freshToken);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return <>{token ? <Stats token={token} /> : <Login onTokenChange={handleTokenChange} />}</>;
}

export default App;
