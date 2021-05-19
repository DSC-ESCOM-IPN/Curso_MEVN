const mongoose = require('mongoose');
const {Schema} = mongoose;

const OrderProductSchema = new Schema({
  name: {type: String, required: true},
  total: {type: Number, required: true},
  description: {type: String, required: true},
  cost: {type: Number, required: true},
  image: {type: String, required: true},
});

module.exports = mongoose.model('OrderProduct', OrderProductSchema);
