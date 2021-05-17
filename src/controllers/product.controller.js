'use strict'
const Product = require('../models/Product.model');

const productController = {};

productController.get = async(req, res) => {
    const id = req.query.id;
    // Retrieve all products
    if(id === undefined) {
        const products = await Product.find();
        res.status(200).json(products);
    }
    // Retrieve product by id
    else {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch(e) {
            res.status(500).json({
                server: 'Error en la query'
            });
        }
    }
}

productController.post = async(req, res) => {
    try {
        const { name, stock, description, cost } = req.body;
        const image = req.file.filename;
        const newProduct = new Product({name, stock, description, cost, image});
        await newProduct.save();
        res.status(200).json({
            server: 'Producto agregado'
        });
    } catch(e) {
        console.log(e);
        res.status(403).json({
            server: 'Error :c'
        })
    }
}

productController.delete = async(req, res) => {
    const { id } = req.body;
    await Product.findByIdAndDelete(id);
    res.status(200).json({
        server: 'Producto eliminado'
    });
}

module.exports = productController