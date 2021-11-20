import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  shoplist: [],
  bought: [],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // actions
  const addItemToShoplist = (item) => {
    dispatch({ type: "ADD_ITEM_TO_SHOPLIST", payload: item });
  };

  return (
    <GlobalContext.Provider
      value={{
        shoplist: state.watchlist,
        bought: state.bought,
        addItemToShoplist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
