import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: {
    email: "",
    name: "",
    wallet: {},
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get currencies
export const getLoggedUser = createAsyncThunk(
  "auth/getLoggedUser",
  async (token, thunkAPI) => {
    try {
      return await authService.getLoggedUser(token);
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setData(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoggedUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLoggedUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getLoggedUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice;
