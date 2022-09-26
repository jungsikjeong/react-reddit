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

// @desc    게시글 좋아요
// @route   PUT /api/posts/like/:postId
// @access  Private
const postLike = asyncHandler(async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).sort({
      date: -1,
    });

    // 게시글이 이미 좋아요 눌렸는지 확인
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      console.log('이미');
      res.status(401);
      throw new Error('이미 좋아요를 누른 게시물입니다.');
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = { getPosts, postLike };
