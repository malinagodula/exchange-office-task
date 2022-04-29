import { createSlice, configureStore, current } from "@reduxjs/toolkit";

const initialState = {};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    initEchangeOfficeStore(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    scoring: scoringSlice.reducer,
  },
});

export const exchangeActions = exchangeSlice.actions;
export default store;
