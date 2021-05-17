const mongoose = require('mongoose');
const { Schema } = mongoose;
const Product = require('./Product.model');

const OrderSchema = new Schema({
  date: {type: String, required: true},
  products: [Product]
});

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);