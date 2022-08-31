import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import communitySlice from '../features/community/communitySlice';
import postSlice from '../features/post/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    community: communitySlice,
    post: postSlice,
  },
});
