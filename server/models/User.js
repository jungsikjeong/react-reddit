const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  // 내가 개설한 커뮤니티 목록들
  myCommunityList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'community',
    },
  ],
  // 내가 작성한 글 목록들
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post',
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', UserSchema);
