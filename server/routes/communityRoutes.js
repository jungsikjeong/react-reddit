const express = require('express');
const {
  createCommunity,
  getCommunityList,
  GetCommunity,
} = require('../controllers/communityController');

const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

// /api/community
router.route('/').post(protect, createCommunity);
router.get('/list', getCommunityList);
router.get('/:id', GetCommunity);

module.exports = router;
