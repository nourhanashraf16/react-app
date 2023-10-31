import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.cartList.push({
          ...action.payload,
          quantity: 1,
          subtotal: action.payload.price,
        });
      }
    },
    removeFromCart: (state, action) => {
      const updateArray = state.cartList.filter(
        (item) => item.id !== action.payload
      );
      state.cartList = updateArray;
    },
    incrementQuantity: (state, action) => {
      const item = state.cartList.find((item) => item.id === action.payload);
      item.quantity++;
      item.subtotal = item.price * item.quantity;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartList.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      item.subtotal = item.price * item.quantity;
    },
    removeAll: (state) => {
      state.cartList = [];
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.cartList.reduce((acc, cur) => {
        return acc + cur.subtotal;
      }, 0);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  removeAll,
  getTotalPrice,
} = cartSlice.actions;
