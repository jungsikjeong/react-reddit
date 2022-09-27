const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // header로부터 token을 얻음
      token = req.headers.authorization.split(' ')[1];

      // 토큰 확인
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 토큰에서 사용자 가져오기
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorization');
    }

    if (!token) {
      res.status(401);
      throw new Error('Not authorization');
    }
  }
});
module.exports = { protect };
