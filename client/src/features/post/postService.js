import axios from 'axios';

const API_URL = '/api/community/';
const API_URL_POSTS = '/api/posts/';
// /api/community/:id/post

// Create new Post
const createPost = async (postData, communityId, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.post(
    API_URL + communityId + '/post',
    postData,
    config
  );

  return res.data;
};

// get Posts
const getPosts = async (communityId, queryString) => {
  const res = await axios.get(API_URL + communityId + `/post?${queryString}`);
  return res.data;
};

// getMainPosts
const getMainPosts = async () => {
  const res = await axios.get('/api/posts');
  return res.data;
};

// get Post
const getPost = async (communityId, postId) => {
  const res = await axios.get(API_URL + communityId + `/post/${postId}`);

  return res.data;
};

// Post Like
const postLike = async (postId, token) => {
  const res = axios.request({
    url: `/api/posts/like/${postId}`,
    method: 'put',
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
};

// Create new Comment
const createComment = async ({ text, communityId, postId }, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.post(
    API_URL + communityId + `/post/${postId}`,
    { text },
    config
  );

  return res.data;
};

// Remove Comment
const RemoveComment = async ({ communityId, postId, commentId }, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // DELETE /api/community/:communityId/post/:postId/:commentId
  const res = await axios.delete(
    API_URL + communityId + `/post/${postId}/${commentId}`,
    config
  );

  return res.data;
};

// Update Comment
const updateComment = async (
  { communityId, postId, commentId, text },
  token
) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // @route   PUT /api/community/:communityId/post/:postId/:commentId
  const res = await axios.put(
    API_URL + communityId + `/post/${postId}/${commentId}`,
    { text },
    config
  );

  return res.data;
};

const postService = {
  createPost,
  getPosts,
  getMainPosts,
  getPost,
  postLike,
  createComment,
  RemoveComment,
  updateComment,
};

export default postService;
