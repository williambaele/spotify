import React, { useEffect, useState } from "react";

const Login = ({ onTokenChange }) => {
  const CLIENT_ID = "be2f824d7c214dde83c36641c55fe4cb";
  const REDIRECT_URI = "https://spotify-bc5ac.web.app";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize?scope=user-top-read";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    console.log("Stored token:", token);

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
    onTokenChange(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="h-screen bg-[#121212] flex items-center">
      <div className="container mx-auto items-center">
        <div className="grid md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg"
              alt=""
              className="h-40"
            />
          </div>
          <div className="justify-center my-6 grid text-center space-y-4">
            <h1 className="text-5xl text-[#1ed760] font-bold">SPOTIFY STATS</h1>
            <p className="text-xl text-white">Check your stats in a second</p>
            {!token ? (
              <button className="rounded-full bg-[#1DB954] hover:bg-[#1DB954]/90 py-3 px-2 font-bold text-white">
                 <a
                  href={`${AUTH_ENDPOINT}&client_id=${CLIENT_ID}&redirect_uri=https://spotify-bc5ac.web.app&response_type=${RESPONSE_TYPE}`}
                  className="flex gap-4 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-spotify"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
                  </svg>
                  <p>Login with Spotify</p>
                </a>
              </button>
            ) : (
              <button
                onClick={logout}
                className="rounded-full bg-[#1DB954] hover:bg-[#1DB954]/90 py-3 px-2 font-bold text-white"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
