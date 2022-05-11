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
