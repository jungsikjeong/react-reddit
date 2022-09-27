const asyncHandler = require('express-async-handler');

const Post = require('../models/postModel');

// @desc    Get All Posts (프론트 메인화면에서 posts 출력)
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().sort({
    createdAt: -1,
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
  let postNumber;

  const post = await Post.findById(req.params.postId);

  // // 게시글이 이미 좋아요 눌렸는지 확인
  // if (
  //   post.likes.filter((like) => like.user.toString() === req.user.id).length > 0
  // ) {
  //   res.status(401);
  //   throw new Error('이미 좋아요를 누른 게시물입니다.');
  // }

  postNumber = JSON.parse(post.likesCounter);
  postNumber++;
  const counter = JSON.stringify(postNumber);

  post.likes.unshift({ user: req.user.id });
  post.likesCounter = counter;

  await post.save();

  const posts = await Post.find().sort({
    createdAt: -1,
  });

  res.json(posts);
});

// @desc    게시글 싫어요
// @route   PUT /api/posts/unlike/:postId
// @access  Private
const postUnLike = asyncHandler(async (req, res) => {
  let postNumber;

  const post = await Post.findById(req.params.postId);

  const exist = post.likes.find(
    (like) => like.user.toString() === req.user._id.toString()
  );

  if (exist) {
    const removeIndex = post.likes
      .map((likeUser) => likeUser.user.toString())
      .indexOf(req.user._id);

    postNumber = JSON.parse(post.likesCounter);
    postNumber--;
    const counter = JSON.stringify(postNumber);

    post.likes.splice(removeIndex, 1);
    post.likesCounter = counter;

    await post.save();

    const posts = await Post.find().sort({
      createdAt: -1,
    });

    return res.json(posts);
  } else {
    postNumber = JSON.parse(post.likesCounter);

    if (postNumber === 0) {
      postNumber = -1;
    } else if (postNumber < 0) {
      postNumber--;
    }

    const counter = JSON.stringify(postNumber);
    post.likesCounter = counter;

    await post.save();

    const posts = await Post.find().sort({
      createdAt: -1,
    });

    return res.json(posts);
  }
});

module.exports = { getPosts, postLike, postUnLike };
