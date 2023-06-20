import React from "react";
import ArtistsRow from "./ArtistsRow";
import TracksRow from "./TracksRow";

const Table = ({ data, type }) => {
  return (
    <div className="mx-auto container my-2 space-y-3">
      {type === "artists" ? (
        <ArtistsRow data={data}/>
      ) : (
        <TracksRow data={data}/>
      )}
    </div>
  );
};

export default Table;
