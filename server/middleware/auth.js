const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // 헤더에서 토큰 가져오기
  const token = req.header('x-auth-token');

  // 토큰 확인
  if (!token) {
    return res.status(401).json({ msg: '토큰 없음, 승인 거부' });
  }
  try {
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    req.user = decoded.user;
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
