import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dealService from "./dealService";

const initialState = {
  deals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new deal
export const createDeal = createAsyncThunk(
  "deals/create",
  async (data, thunkAPI) => {
    try {
      return await dealService.createDeal(data);
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

// Get user deals
export const getDeals = createAsyncThunk(
  "deals/getAll",
  async (token, thunkAPI) => {
    try {
      return await dealService.getDeals(token);
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

const dealSlice = createSlice({
  name: "deal",
  initialState,
  reducers: {
    reset(state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDeal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDeal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.deals.push(action.payload);
      })
      .addCase(createDeal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getDeals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDeals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.deals = action.payload;
      })
      .addCase(getDeals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const dealActions = dealSlice.actions;
export default dealSlice;
