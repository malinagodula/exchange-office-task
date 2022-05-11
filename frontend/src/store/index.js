// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const initialState = {
//   initialCurrencies: [],
// };

// const exchangeSlice = createSlice({
//   name: "exchange",
//   initialState,
//   reducers: {
//     setInitialCurrencies() {},
//     initEchangeOfficeStore(state, action) {},
//   },
//   extraReducers: (builder) => {
//     builder.addCase(createGoal.pending, (state) => {
//       state.isLoading = true;
//     });
//   },
// });

// const store = configureStore({
//   reducer: {
//     exchange: exchangeSlice.reducer,
//   },
// });

// export const exchangeActions = exchangeSlice.actions;
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import dealSlice from "./deals/dealSlice";
import currencySlice from "./currency/currencySlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    deal: dealSlice.reducer,
    currency: currencySlice.reducer,
  },
});

export default store;
