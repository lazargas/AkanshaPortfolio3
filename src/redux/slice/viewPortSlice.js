"use client";
import { createSlice } from "@reduxjs/toolkit";

const viewPortSlice = createSlice({
  name: "viewport",
  initialState: 0, // Initial state for viewport width
  reducers: {
    setWidth: (state, action) => {
      return action.payload; 
    },
  },
});

export const selectViewportWidth = (state) => state.viewport;

export const { setWidth } = viewPortSlice.actions;

export default viewPortSlice.reducer;
