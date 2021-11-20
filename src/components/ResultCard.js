import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ item }) => {
  const { addItemToShoplist } = useContext(GlobalContext);
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        <img src={`${item.Poster}`}></img>
      </div>
      <div className="info">
        <div className="header">
          <h1 className="title"> {item.Title}</h1>
          <h4 className="description">{item.Year}</h4>
        </div>
      </div>
      <div className="controls">
        <button className="btn" onClick={() => addItemToShoplist(item)}>
          Add to Shoplist
        </button>
      </div>
    </div>
  );
};
