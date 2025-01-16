import { configureStore } from "@reduxjs/toolkit";
import nonAPISliceReducer from "./nonAPISlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    nonAPIReducer: nonAPISliceReducer, //createSlice
    [apiSlice.reducerPath]: apiSlice.reducer, //createAPI - for all API calls this configuration alone is enough
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
