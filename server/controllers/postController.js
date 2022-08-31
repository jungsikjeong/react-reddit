const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Community = require('../models/communityModel');
const Post = require('../models/postModel');

// @desc    Get All Post
// @route   GET /api/community/:communityId/post
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find(req.params.communityId);

  if (!posts) {
    res.status(401);
    throw new Error('포스트가 없습니다.');
  }

  return res.status(200).json(posts);
});

// @desc    Get Post
// @route   GET /api/community/:communityId/post/:postId
// @access  Public
const getPost = asyncHandler(async (req, res) => {
  const posts = await Post.findById(req.params.postId);

  if (!posts) {
    res.status(401);
    throw new Error('포스트가 없습니다.');
  }

  return res.status(200).json(posts);
});

// @desc    Create Post
// @route   POST /api/community/:communityId/post
// @access  Private
const addPost = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);
  const findCommunity = await Community.findById(req.params.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const post = await Post.create({
    title,
    description,
    community: req.params.id,
    communityName: findCommunity.name,
    name: user.name,
    user: req.user.id,
  });

  res.status(200).json(post);
});

module.exports = {
  addPost,
  getPosts,
  getPost,
};
