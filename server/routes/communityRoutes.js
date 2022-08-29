const express = require('express');
const {
  createCommunity,
  getCommunityList,
  GetCommunity,
} = require('../controllers/communityController');

const router = express.Router();

const { protect } = require('../middleware/authMiddleware');
const postRouter = require('./postRoutes');
router.use('/:communityId/post', postRouter); // /api/community/:communityId/post

// /api/community
router.route('/').post(protect, createCommunity);
router.get('/list', getCommunityList);
router.get('/:communityId', GetCommunity);

module.exports = router;
