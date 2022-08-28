const mongoose = require('mongoose');

const communitySchema = mongoose.Schema(
  {
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],

    name: {
      type: String,
      required: [true, '커뮤니티 이름을 입력해주세요'],
    },

    title: {
      type: String,
      required: [true, '커뮤니티 주제를 입력해주세요'],
    },

    description: {
      type: String,
      required: [true, '해당 커뮤니티의 설명을 입력해주세요'],
    },

    posts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },

    backgroundImage: {
      type: String,
    },

    profileImage: {
      type: String,
    },

    isAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Community', communitySchema);
