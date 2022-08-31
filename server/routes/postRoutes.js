const express = require('express');
const router = express.Router({ mergeParams: true });

const { protect } = require('../middleware/authMiddleware');

const { addPost, getPosts, getPost } = require('../controllers/postController');

router.route('/').get(getPosts).post(protect, addPost);
// /api/community/:id/post
router.route('/:postId').get(getPost);

module.exports = router;
