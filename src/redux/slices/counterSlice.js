import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialCounter: 0,
};

export const counterSlice = createSlice({
  name: "counter", //sliceName only not effect
  initialState,
  reducers: {
    increment: (state) => {
      console.log("state", state);
      state.initialCounter = state.initialCounter + 1;
    },
    decrement: (state) => {
      state.initialCounter = state.initialCounter - 1;
    },
  },
});
console.log(counterSlice);
export const { increment, decrement } = counterSlice.actions;
