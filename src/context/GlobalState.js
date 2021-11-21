import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // actions
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addItemToWatchlist = (item) => {
    dispatch({ type: "ADD_ITEM_TO_WATCHLIST", payload: item });
  };

  // removing from watchlist

  const removeMovieFromWatchlist = (imdbID) => {
    dispatch({ type: "REMOVE_ITEM_FROM_WATCHLIST", payload: imdbID });
  };

  //   adding to watched

  const addItemToWatched = (item) => {
    dispatch({ type: "ADD_ITEM_TOWATCHED", payload: item });
  };

  // from watchlist to watched
  const moveToWatchlist = (item) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: item });
  };
  // delete in watched
  const removeFromWatched = (imdbID) => {
    dispatch({ type: "REMOVE_ITEM_FROM_WATCHED", payload: imdbID });
  };
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addItemToWatchlist,
        removeMovieFromWatchlist,
        addItemToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
