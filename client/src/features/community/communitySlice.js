import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import communityService from './communityService';

const initialState = {
  communities: [],
  community: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new community
export const createCommunity = createAsyncThunk(
  'community/create',
  async (communityData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await communityService.createCommunity(communityData, token);
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

export const communitySlice = createSlice({
  name: 'community',
  initialState,

  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createCommunity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCommunity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.community = action.payload;
      })
      .addCase(createCommunity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = communitySlice.actions;
export default communitySlice.reducer;
