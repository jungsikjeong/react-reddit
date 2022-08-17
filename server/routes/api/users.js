const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const Post = require('../../models/Post');
const auth = require('../../middleware/auth');
// const upload = require('../../middleware/upload');

// @route   POST /api/users (회원가입)
// @desc    Register user
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // // Validation
    // if (!name || !email || !password) {
    //   res.status(400).json({ error: '빈 칸을 입력해주세요!' });
    // }
    // 사용자 확인
    let user = await User.findOne({ email });

    if (user) {
      // return을 추가해줘도되나?

      res.status(400).json({ error: '사용자가 이미 존재합니다.' });
    }

    user = new User({
      name,
      email,
      password,
    });

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Return jsonwebtoken
    // 회원가입하자마자 바로 로그인할 수 있게 회원가입에 사용
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '360000' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
