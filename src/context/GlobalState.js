import React, { createContext, useReducer, useEffect } from "react";
import Cookies from "universal-cookie";
import AppReducer from "./AppReducer";
const cookies = new Cookies();

const initialState = {
  watchlist: cookies.get("watchlist") ? cookies.get("watchlist") : [],
  watched: cookies.get("watched") ? cookies.get("watched") : [],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // actions
  useEffect(() => {
    cookies.set("watchlist", state.watchlist);
    cookies.set("watched", state.watched);
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
