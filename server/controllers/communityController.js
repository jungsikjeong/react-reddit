const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Community = require('../models/communityModel');

// @desc    Create new community
// @route   POST /api/community
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

// @desc    Get All Communities
// @route   GET /api/community/list
// @access  Public
const getCommunityList = asyncHandler(async (req, res) => {
  const { type } = req.query;

  if (type === 'main') {
    // 처음 메인화면에만 최대 다섯개 출력
    const communityList = await Community.find().limit(5);

    return res.status(200).json(communityList);
  }

  const communityList = await Community.find();

  if (!communityList) {
    res.status(404);
    throw new Error('커뮤니티 리스트를 찾을 수 없습니다.');
  }

  res.status(200).json(communityList);
});

// @desc    Get Community
// @route   GET /api/community/:communityId
// @access  Public
const GetCommunity = asyncHandler(async (req, res) => {
  const community = await Community.findById(req.params.id);

  if (!community) {
    res.status(404);
    throw new Error('해당 커뮤니티 페이지를 찾을 수 없습니다.');
  }

  res.status(200).json(community);
});

module.exports = {
  createCommunity,
  GetCommunity,
  getCommunityList,
};
