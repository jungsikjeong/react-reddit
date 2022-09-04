const asyncHandler = require('express-async-handler');

const Post = require('../models/postModel');

// @desc    Get All Posts (프론트 메인화면에서 posts 출력)
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().sort({
    date: -1,
  });

  if (!posts) {
    res.status(401);
    throw new Error('포스트가 없습니다.');
  }

  return res.status(200).json(posts);
});

module.exports = { getPosts };
