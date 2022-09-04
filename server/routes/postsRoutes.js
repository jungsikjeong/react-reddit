const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const { getPosts, postLike } = require('../controllers/getPostsController');

// /api/posts
router.route('/').get(getPosts);

// /api/posts/like/:postId
router.route('/like/:postId').put(protect, postLike);

module.exports = router;
