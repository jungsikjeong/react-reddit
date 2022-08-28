const express = require('express');
const { createCommunity } = require('../controllers/communityController');

const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, createCommunity);

module.exports = router;
