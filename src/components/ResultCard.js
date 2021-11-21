import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ item }) => {
  const { addItemToWatchlist, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.imdbID === item.imdbID);
  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-descripion">
        <div className="poster-wrapper">
          <img src={`${item.Poster}`}></img>
        </div>
        <div className="info">
          <div className="header">
            <h1 className="title"> {item.Title}</h1>
            <h4 className="description">{item.Year}</h4>
          </div>
        </div>
      </div>
      <div className="controls">
        <button
          className="btn"
          disabled={watchlistDisabled}
          onClick={() => addItemToWatchlist(item)}
        >
          Add to watchlist
        </button>
      </div>
    </div>
  );
};
