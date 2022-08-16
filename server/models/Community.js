const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 커뮤니티 생성
const CommunitySchema = new Schema({
  title: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
  backImage: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('community', CommunitySchema);
