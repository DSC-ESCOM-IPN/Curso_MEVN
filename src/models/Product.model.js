const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {type: String, required: true},
  stock: {type: String, required: true},
  description: {type: String, required: true},
  cost: {type: Number, required: true},
  image: {type: String, required: true},
  category: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
});

ProductSchema.methods.getImgURL = () => {
  return uuid();
};

module.exports = mongoose.model('Product', ProductSchema);