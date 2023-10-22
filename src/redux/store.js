import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../redux/slices/counterSlice";
export const store = configureStore({
  reducer: {
    counterrr: counterSlice.reducer,
  },
});
console.log(store);
