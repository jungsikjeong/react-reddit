const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const {
  getPosts,
  postLike,
  postUnLike,
  postSearch,
} = require('../controllers/getPostsController');

// /api/posts
router.route('/').get(getPosts);

// /api/posts/like/:postId
router.route('/like/:postId').put(protect, postLike);
router.route('/unLike/:postId').put(protect, postUnLike);

router.route('/search').post(postSearch);

module.exports = router;
