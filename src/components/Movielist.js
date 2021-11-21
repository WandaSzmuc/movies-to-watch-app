import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Movielist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1>Your list of movies to watch:</h1>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((item) => (
              <MovieCard item={item} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            You have no movies to watch!
            <br /> Please find some new ones!
          </h2>
        )}
      </div>
    </div>
  );
};
