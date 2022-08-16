const express = require('express');
const { runInNewContext } = require('vm');
const router = express.Router();

const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');
// const upload = require('../../middleware/upload');

// @route   POST api/posts/createCommunity
// @desc    새로운 커뮤니티 생성
// @access  Private
router.post('/createCommunity', auth, async (req, res) => {
  const { title, name } = req.body;

  try {
    const user = User.findById(req.user.id);

    const newCommunity = new Post({
      title: title,
      name: name,
      user: req.user.id,
    });

    user.myCommunityList.push(newPost);
    await user.save();

    const community = await newCommunity.save();

    res.json(community);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/posts
// @desc    게시물 작성
// @access  Private
router.post('/', auth, async (req, res) => {
  const { title, contents, image } = req.body;

  try {
    const user = User.findById(req.user.id);

    const newPost = new Post({
      title: title,
      contents: contents,
      image: image ? image : null,
      user: req.user.id,
    });

    user.posts.push(newPost);
    await user.save();

    const post = await newPost.save();

    res.json(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts
// @desc    모든 게시물 가져 오기
// @access  Public
