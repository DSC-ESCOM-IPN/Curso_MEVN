const mongoose = require('mongoose');
const {Schema} = mongoose;
const OrderProduct = require('./OrderProduct.model');

const OrderSchema = new Schema({
  date: {type: String, required: true},
  products: [{type: Schema.Types.ObjectId, ref: 'OrderProduct'}],
});

module.exports = mongoose.model('Order', OrderSchema);
