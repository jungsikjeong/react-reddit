const express = require('express');
const router = express.Router();

const { getPosts } = require('../controllers/getPostsController');

// /api/posts
router.route('/').get(getPosts);

module.exports = router;
