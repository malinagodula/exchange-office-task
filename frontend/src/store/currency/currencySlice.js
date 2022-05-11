import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import currencyService from "./currencyService";

const initialState = {
  currencies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get currencies
export const getCurrencies = createAsyncThunk(
  "currencies/getCurrent",
  async (_, thunkAPI) => {
    try {
      return await currencyService.getCurrencies();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    reset(state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrencies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currencies = action.payload;
      })
      .addCase(getCurrencies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const currencyActions = currencySlice.actions;
export default currencySlice;
