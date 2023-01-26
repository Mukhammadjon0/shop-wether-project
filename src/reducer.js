export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return (state = {
        ...state,
        basket: [...state.basket, action.payload],
      });
    default:
      return state;
  }
};
console.log(initialState.basket)