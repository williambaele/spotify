import React, { useState } from "react";

const Banner = ({onVisibilityChange}) => {

  const [visibility, setVisiblity] = useState(true);

  const handleVisibility = (selectedVisibility) => {
    setVisiblity(selectedVisibility);
    onVisibilityChange(selectedVisibility)
  };




  return (
    <div class="fixed inset-x-0 bottom-0 p-4">
      <div class="relative flex items-center justify-between gap-4 rounded-lg bg-[#1DB954] px-4 py-3 text-white shadow-lg">
        <p class="text-sm font-medium">
          Note that with the Spotify's API restriction you have to be manually
          registered by myself to use this wonderful app.
        </p>
        <button
        onClick={(e) => handleVisibility(false)}
          aria-label="Close"
          class="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
