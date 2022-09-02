import axios from 'axios';

const API_URL = '/api/community/';
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
const getPosts = async (communityId) => {
  const res = await axios.get(API_URL + communityId + '/post');
  return res.data;
};

// get Post
const getPost = async (communityId, postId) => {
  const res = await axios.get(API_URL + communityId + `/post/${postId}`);

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

const postService = {
  createPost,
  getPosts,
  getPost,
  createComment,
  RemoveComment,
};

export default postService;
