export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_ITEM_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (item) => item.imdbID !== action.payload
        ),
      };
    case "ADD_ITEM_TOWATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (item) => item.imdbID !== action.payload.imdbID
        ),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (item) => item.imdbID !== action.payload.imdbID
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_ITEM_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((item) => item.imdbID !== action.payload),
      };
    default:
      return state;
  }
};
