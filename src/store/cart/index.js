import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addBook: (state, action) => {
      state[action.payload] = (state[action.payload] || 0) + 1;
    },
    removeBook: (state, action) => {
      if (state[action.payload] === 1) {
        state[action.payload] = 0;
      } else {
        state[action.payload] = state[action.payload] - 1;
      }
    },
  },
});