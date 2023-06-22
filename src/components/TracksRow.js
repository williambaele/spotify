import React from "react";

const TracksRow = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        const image = item.album?.images?.[0]?.url;
        const artists = item.artists?.[0]?.name;
        const artists2 = item.artists?.[1]?.name;

        return (
          <div
            className="grid grid-cols-10 gap-4 bg-[#2a2a2a] px-6 rounded-lg h-20 items-center"
            key={index}
          >
            <span className="text-lg md:text-4xl text-[#1DB954] font-extrabold">
              #{index + 1}
            </span>
            {image && (
              <div className="col-span-2 md:col-span-1">
                <img src={image} alt="" className="h-10 md:h-16 rounded-lg" />
              </div>
            )}

            <div className="col-span-3">
              <h2 className="text-lg md:text-3xl font-bold text-[#1DB954]">
                {item?.name.slice(0, 20)}
              </h2>
            </div>
            <div className="col-span-3">
              <h2 className="md:text-lg text-md text-[#1DB954]">
                {artists && artists} {artists2 && `, ${artists2}`}
              </h2>
            </div>
            <span className="flex justify-end col-span-1 md:col-span-2">
              <a href={item.external_urls?.spotify}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#1DB954"
                  className="bi bi-spotify cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
                </svg>
              </a>
            </span>
          </div>
        );
      })}
    </>
  );
};

export default TracksRow;
