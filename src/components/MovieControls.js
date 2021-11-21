import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ item, type }) => {
  const {
    removeMovieFromWatchlist,
    addItemToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addItemToWatched(item)}>
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(item.imdbID)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(item)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(item.imdbID)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
