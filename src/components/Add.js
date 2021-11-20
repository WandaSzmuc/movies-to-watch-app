import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://www.omdbapi.com/?apikey=3113229e&i&type=movie&page=1&s=${e.target.value}`
    )
      .then((res) => res.json())
      .then(({ Search }) => {
        if (!Search) {
          setResults([]);
        } else {
          setResults(Search);
        }
      });
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            ></input>
          </div>
          {results.length > 0 ? (
            <ul className="results">
              {results.map((item) => (
                <li key={item.imdbID}>
                  <ResultCard item={item} />
                </li>
              ))}
            </ul>
          ) : (
            <div>Not found</div>
          )}
        </div>
      </div>
    </div>
  );
};
