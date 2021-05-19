'use strict'
const Category = require('../models/Category.model');
const Product = require('../models/Product.model');

const categoryController = {};

categoryController.get = async(req, res) => {
    const categories = await Category.find();
    res.status(200).json(categories);
}

categoryController.post = async(req, res) => {
    const { name, description } = req.body;
    const newCategory = new Category({ name, description });
    await newCategory.save();
    res.status(200).json({
        server: 'Categoria registrada'
    });
}

categoryController.delete = async(req, res) => {
    const { id } = req.body;
    const category = await Category.findByIdAndDelete(id);
    await Product.updateMany({ '_id': category.products }, { $pull: { categories: category._id } });
    res.status(200).json({
        server: 'Categoria eliminada'
    });
}

module.exports = categoryController;