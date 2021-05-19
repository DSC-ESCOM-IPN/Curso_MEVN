const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.set('useCreateIndex', true);
const bcrypt = require('bcryptjs');
const Order = require('./Order.model');

const UserSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  token: {type: String, required: false, default: null},
  order: [{type: Schema.Types.ObjectId, ref: 'Order'}]
});

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);