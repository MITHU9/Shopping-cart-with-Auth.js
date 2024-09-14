import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //console.log(state, action);
      state.cartItems.push(action.payload);
    },
    removeFromCart(state, action) {
      let cpyItems = [...state.cartItems];
      cpyItems = cpyItems.filter((item) => item.id !== action.payload);
      state.cartItems = cpyItems;

      return state;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
