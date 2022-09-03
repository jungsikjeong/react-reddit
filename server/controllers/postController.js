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
  const post = await Post.findById(req.params.postId);

  if (!post) {
    res.status(401);
    throw new Error('포스트가 없습니다.');
  }

  return res.status(200).json(post);
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

// @desc    Create Post Comment
// @route   POST /api/community/:communityId/post/:postId
// @access  Private
const addComment = asyncHandler(async (req, res) => {
  const { text } = req.body;

  const user = await User.findById(req.user.id);
  const post = await Post.findById(req.params.postId);

  if (!user) {
    res.status(401);
    throw new Error('해당 유저가 없습니다.');
  }

  if (!post) {
    res.status(401);
    throw new Error('게시물을 찾을 수 없습니다.');
  }
  if (!text || text === '') {
    res.status(401);
    throw new Error('게시글을 입력해주세요');
  }

  const newComment = {
    text: text,
    user: user,
    name: user.name,
  };

  await post.comments.unshift(newComment);

  await post.save();

  res.json(post.comments);
});

// @route   Delete Comment
// @desc    DELETE /api/community/:communityId/post/:postId/:commentId
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    const comment = await post.comments.find(
      (comment) => comment.id === req.params.commentId
    );

    if (!post) {
      res.status(401);
      throw new Error('게시물을 찾을 수 없습니다.');
    }

    if (!comment) {
      res.status(401);
      throw new Error('댓글을 찾을 수 없습니다.');
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(404);
      throw new Error('권한이 없습니다.');
    }

    // Get remove index
    // 댓글 삭제
    const removeIndex = post.comments
      .map((comment) => comment.id)
      .indexOf(req.params.commentId);

    post.comments.splice(removeIndex, 1);
    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @desc    Update Comment
// @route   PUT /api/community/:communityId/post/:postId/:commentId
// @access  Private
const updateComment = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  const post = await Post.findById(req.params.postId);

  const comment = await post.comments.find(
    (comment) => comment.id === req.params.commentId
  );

  if (!post) {
    res.status(401);
    throw new Error('게시물을 찾을 수 없습니다.');
  }

  // Check user
  if (comment.user.toString() !== req.user.id) {
    return res.status(404);
    throw new Error('권한이 없습니다.');
  }

  const updatedComment = await Post.findOneAndUpdate(
    { _id: req.params.postId, 'comments._id': req.params.commentId },
    {
      $set: {
        'comments.$.text': req.body.text,
      },
    },
    { new: true }
  );

  post.save();

  res.json(post.comments);
  // updatedComment.comments.map((comment) => res.json(comment));
});

module.exports = {
  addPost,
  getPosts,
  getPost,
  addComment,
  deleteComment,
  updateComment,
};
