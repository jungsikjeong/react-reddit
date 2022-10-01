import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line no-unused-vars
let menuCurrentState;

const initialState = {
  menuState: false,
};

export const menuClose = createAsyncThunk(
  'menu/close',
  async (menuState, thunkAPI) => {
    if (!menuState) return (menuCurrentState = false);
  }
);

export const menuOnOff = createAsyncThunk(
  'menu/toggle',
  async (_, thunkAPI) => {
    if (!thunkAPI.getState().menu.menuState) {
      return (menuCurrentState = true);
    } else {
      return (menuCurrentState = false);
    }
  }
);

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(menuClose.fulfilled, (state, action) => {
      state.menuState = action.payload;
    });
    builder.addCase(menuOnOff.fulfilled, (state, action) => {
      state.menuState = action.payload;
    });
  },
});

export const { reset } = menuSlice.actions;
export default menuSlice.reducer;
