import { createSlice } from "@reduxjs/toolkit";

export const LikeSlice = createSlice({
  initialState: [],
  name: "Like",
  reducers: {
    liked: (state, action) => {
      state.push(action.payload);
    },
    unliked: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { liked, unliked } = LikeSlice.actions;
export default LikeSlice.reducer;
