import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import communityService from './communityService';
import qs from 'qs';

const initialState = {
  communities: [],
  community: {},
  isError: false,
  isSuccess: false,
  isCreateSuccess: false,
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

// Get All communities
export const getAllCommunity = createAsyncThunk(
  'community/getAll',
  async (type, thunkAPI) => {
    try {
      // qs 사용전 { main: '' }
      // qs 사용 후 { type: 'main' }
      const queryString = qs.stringify({
        type,
      });

      return await communityService.getAllCommunity(queryString);
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

// Get community
export const getCommunity = createAsyncThunk(
  'community/getCommunity',
  async (communityId, thunkAPI) => {
    try {
      return await communityService.getCommunity(communityId);
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
        state.isCreateSuccess = true;
        state.community = action.payload;
      })
      .addCase(createCommunity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getAllCommunity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCommunity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.communities = action.payload;
      })
      .addCase(getAllCommunity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getCommunity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCommunity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.community = action.payload;
      })
      .addCase(getCommunity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = communitySlice.actions;
export default communitySlice.reducer;
