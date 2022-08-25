const mongoose = require('mongoose');

const communitySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
