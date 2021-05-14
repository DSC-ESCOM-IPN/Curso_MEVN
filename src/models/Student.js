const mongoose = require('mongoose');
const {Schema} = mongoose;

const StudentSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  userType: {type: Number, required: true},
  isRegular: {type: Boolean, required: true},
  posts: {type: [Schema.Types.ObjectId], ref: 'Post', default: []},
});

module.exports = mongoose.model('Student', StudentSchema);
