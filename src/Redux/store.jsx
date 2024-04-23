import { configureStore } from "@reduxjs/toolkit";
import { LikeSlice } from "./Slice";

export const store = configureStore({
  reducer: {
    Like: LikeSlice.reducer,
  },
});
