import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Stats from "./pages/Stats";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/stats" element={<Stats token={token}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
