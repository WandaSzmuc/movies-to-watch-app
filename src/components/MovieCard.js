import React from "react";
import { MovieControls } from "./MovieControls";
export const MovieCard = ({ item, type }) => {
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img src={`${item.Poster}`} alt={`${item.Title} Poster`}></img>
      </div>
      <MovieControls type={type} item={item} />
    </div>
  );
};
