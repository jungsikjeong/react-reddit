const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    title: {
      type: String,
      required: [true, '제목을 입력해주세요'],
    },

    description: {
      type: String,
      required: [true, '포스트의 내용을 입력해주세요'],
    },

    community: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Community',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', postSchema);
