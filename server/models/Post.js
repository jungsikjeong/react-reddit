const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 커뮤니티에 글 작성
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  image: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
  community: [
    {
      type: Schema.Types.ObjectId,
      ref: 'community',
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      text: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      likes: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
          },
        },
      ],
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('post', PostSchema);
