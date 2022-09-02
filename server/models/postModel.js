const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    community: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Community',
    },

    communityName: {
      type: String,
    },

    name: {
      type: String,
    },

    title: {
      type: String,
      required: [true, '제목을 입력해주세요'],
    },

    description: {
      type: String,
      required: [true, '포스트의 내용을 입력해주세요'],
    },

    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
      },
    ],

    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
        },
        name: {
          type: String,
        },
        text: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', postSchema);
