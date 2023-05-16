import { createSlice } from "@reduxjs/toolkit";

export const savedLayout = createSlice({
  name: "savedLayout",
  initialState: {
    isChangedLayout: false,
  },
  reducers: {
    changedLayout: (state, action) => {
      state.isChangedLayout = action.payload;
    },
  },
});

export const { changedLayout } = savedLayout.actions;

export default savedLayout.reducer;
