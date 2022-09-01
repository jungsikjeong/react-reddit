const express = require('express');
const router = express.Router({ mergeParams: true });

const { protect } = require('../middleware/authMiddleware');

const {
  addPost,
  getPosts,
  getPost,
  addComment,
  getComment,
  updateComment,
  deleteComment,
} = require('../controllers/postController');

// /api/community/:communityId/post
router.route('/').get(getPosts).post(protect, addPost);
//GET /api/community/:communityId/post/:postId
router.route('/:postId').get(getPost).post(protect, addComment);

// /api/community/:communityId/post/:postId/:commentId
router
  .route('/:postId/:commentId')
  .put(protect, updateComment)
  .delete(protect, deleteComment);

module.exports = router;
