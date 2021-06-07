const mongoose = require('mongoose');
const {Schema} = mongoose;

const CategorySchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
});

module.exports = mongoose.model('Category', CategorySchema);
