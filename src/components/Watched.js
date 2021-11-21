import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1>Watch movies</h1>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((item) => (
              <MovieCard item={item} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            No movies watched! <br />
            Please add some!
          </h2>
        )}
      </div>
    </div>
  );
};
