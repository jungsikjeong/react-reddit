import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postService from './postService';
import qs from 'qs';

const initialState = {
  posts: [],
  post: {},
  comments: [],
  isError: false,
  isSuccess: false,
  isePostSuccess: false,
  isLoading: false,
  message: '',
};

// Create new Post
export const createPost = createAsyncThunk(
  'post/create',
  async ({ title, description, communityId }, thunkAPI) => {
    const postData = {
      title,
      description,
    };
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await postService.createPost(postData, communityId, token);
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

// Get Posts
export const getPosts = createAsyncThunk(
  'post/getAll',
  async ({ communityId, onePost }, thunkAPI) => {
    const queryString = qs.stringify({
      onePost,
    });
    try {
      return await postService.getPosts(communityId, queryString);
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

// Get Posts Main
export const getMainPosts = createAsyncThunk(
  'post/getAllMain',
  async (_, thunkAPI) => {
    try {
      return await postService.getMainPosts();
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

// Get Post
export const getPost = createAsyncThunk(
  'post/get',
  async ({ communityId, postId }, thunkAPI) => {
    try {
      return await postService.getPost(communityId, postId);
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

// Create new Comment
export const createComment = createAsyncThunk(
  'post/createComment',
  async ({ text, communityId, postId }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await postService.createComment(
        { text, communityId, postId },
        token
      );
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

// Get Comments
export const getComments = createAsyncThunk(
  'post/getCommentsAll',
  async (communityId, thunkAPI) => {
    try {
      return await postService.getPosts(communityId);
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

// Remove Comment
export const RemoveComment = createAsyncThunk(
  'post/removeComment',
  async ({ communityId, postId, commentId }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await postService.RemoveComment(
        {
          communityId,
          postId,
          commentId,
        },
        token
      );
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

// Update Comment
export const updateComment = createAsyncThunk(
  'post/updateComment',
  async ({ communityId, postId, commentId, text }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await postService.updateComment(
        {
          communityId,
          postId,
          commentId,
          text,
        },
        token
      );
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

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: (state) => initialState,
    isSuccessReset: (state) => {
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isePostSuccess = true;
        state.post = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getMainPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMainPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(getMainPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(createComment.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(createComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments = action.payload;
      })

      .addCase(createComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(RemoveComment.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(RemoveComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments = action.payload;
      })

      .addCase(RemoveComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateComment.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(updateComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments = action.payload;
      })

      .addCase(updateComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = postSlice.actions;
export const { isSuccessReset } = postSlice.actions;
export default postSlice.reducer;
