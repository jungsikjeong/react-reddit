const express = require('express');
const router = express.Router({ mergeParams: true });

const { protect } = require('../middleware/authMiddleware');

const { addPost, getPosts } = require('../controllers/postController');

router.route('/').get(getPosts).post(protect, addPost);

module.exports = router;
