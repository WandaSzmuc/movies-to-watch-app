export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_SHOPLIST":
      return {
        ...state,
        shoplist: [action.payload, ...state.shoplist],
      };
    default:
      return state;
  }
};
