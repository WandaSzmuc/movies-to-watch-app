export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    default:
      return state;
  }
};
