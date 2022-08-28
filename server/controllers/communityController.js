const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Community = require('../models/communityModel');

// @desc    Create new community
// @route   POST /api/createCommunity
// @access  Private
const createCommunity = asyncHandler(async (req, res) => {
  const { name, title, description } = req.body;

  if (!name || !title || !description) {
    res.status(400);
    throw new Error('커뮤니티 생성 양식에 맞게 입력해주세요');
  }

  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('유저를 찾을 수 없습니다.');
  }

  const community = await Community.create({
    name,
    title,
    description,
    isAdmin: req.user.id,
  });

  res.status(201).json(community);
});

module.exports = {
  createCommunity,
};
