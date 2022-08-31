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

const postService = {
  createPost,
  getPosts,
  getPost,
};

export default postService;
