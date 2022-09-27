const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const {
  getPosts,
  postLike,
  postUnLike,
} = require('../controllers/getPostsController');

// /api/posts
router.route('/').get(getPosts);

// /api/posts/like/:postId
router.route('/like/:postId').put(protect, postLike);
router.route('/unLike/:postId').put(protect, postUnLike);

module.exports = router;
