const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, '이름을 입력해주세요'],
    },

    email: {
      type: String,
      required: [true, 'email을 입력해주세요'],
      unique: true,
    },

    password: {
      type: String,
      required: [true, '비밀번호를 입력해주세요'],
    },

    communities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community',
      },
    ],

    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
