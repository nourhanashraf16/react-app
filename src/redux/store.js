import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../redux/slices/counterSlice";
export const store = configureStore({
  reducer: {
    myCounter: counterSlice.reducer,
  },
});
console.log(store);
