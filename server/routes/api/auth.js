const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const auth = require('../../middleware/auth');

// @route   GET api/auth
// @desc    user by token
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth (로그인)
// @desc    사용자 인증 및 토큰 받기
// @access  Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 유저 확인
    // todo:(email)로 하면 안되는지 확인하기
    const user = User.findOne({ email });

    if (!user) {
      res.status(400).json({ error: '등록된 email이 없습니다.' });
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
      res.status(400).json({error:'패스워드가 일치하지 않습니다.'})
    }

    await user.save();

    const payload = {
      user:{
        id:user.id
      }
    }
    

    // 토큰 발급
    jwt.sign(payload,process.env.JWT_SECRET,
      {expiresIn:360000},
      (err,token)=>{
        if(err) throw err;
        res.json({token})
      })

  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
