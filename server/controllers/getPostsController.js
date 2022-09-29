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

  // 게시글이 이미 좋아요 눌렸는지 확인
  if (
    post.likes.filter((like) => like.user.toString() === req.user.id).length > 0
  ) {
    res.status(401);
    throw new Error('이미 좋아요를 누른 게시물입니다.');
  }

  // 게시글 비추천자 목록에 해당 유저 제거
  const removeIndex = post.unLikes
    .map((likeUser) => likeUser.user.toString())
    .indexOf(req.user._id.toString());

  post.unLikes.splice(removeIndex, 1);

  postNumber = JSON.parse(post.likesCounter);
  postNumber++;
  const counter = JSON.stringify(postNumber);

  post.likes.unshift({ user: req.user.id });
  post.likesCounter = counter;

  await post.save();

  const posts = await Post.find().sort({
    createdAt: -1,
  });

  return res.json({ posts, post });
});

// @desc    게시글 싫어요
// @route   PUT /api/posts/unlike/:postId
// @access  Private
const postUnLike = asyncHandler(async (req, res) => {
  let postNumber;

  const post = await Post.findById(req.params.postId);

  const likeExist = post.likes.find(
    (like) => like.user.toString() === req.user._id.toString()
  );

  const unLikeExist = post.unLikes.find(
    (unLike) => unLike.user.toString() === req.user._id.toString()
  );

  if (unLikeExist) {
    res.status(401);
    throw new Error('이미 싫어요를 누른 게시물입니다.');
  }

  // 유저가 게시글 추천을 한 상태일때
  if (likeExist) {
    // 게시글 추천목록에서 해당 유저지움
    // 지금 removeIndex가 계속 -1이 나온다.. splice를 해줄려면 -가 아니라 0또는 양수가 나와야한다.
    /// indexOf는 ()안의 요소가 존재하지않으면 -1을 출력한다는데..?
    const removeIndex = post.likes
      .map((likeUser) => likeUser.user.toString())
      .indexOf(req.user._id.toString());

    post.likes.splice(removeIndex, 1);

    postNumber = JSON.parse(post.likesCounter);
    postNumber--;
    const counter = JSON.stringify(postNumber);
    post.likesCounter = counter;

    // 비추천 목록에 해당 유저 추가
    post.unLikes.unshift({ user: req.user.id });

    await post.save();

    const posts = await Post.find().sort({
      createdAt: -1,
    });

    return res.json({ posts, post });
  } else {
    // 유저가 게시글 추천을 안누른 상태로 비추천 눌렀을때
    post.unLikes.unshift({ user: req.user.id });

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

    return res.json({ posts, post });
  }
});

module.exports = { getPosts, postLike, postUnLike };
