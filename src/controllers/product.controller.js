'use strict'
const Product = require('../models/Product.model');
const Category = require('../models/Category.model');

const productController = {};

productController.get = async(req, res) => {
    const id = req.query.id;
    // Retrieve all products
    if(id === undefined) {
        const products = await Product
            .find()
            .select(['name', 'cost', 'image', 'categories'])
            .populate('categories', ['name']);
        res.status(200).json(products);
    }
    // Retrieve product by id
    else {
        try {
            const product = await Product
                .findById(id)
                .select(['name', 'stock', 'description', 'cost', 'image', 'categories'])
                .populate('categories', ['name']);
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
        const { name, stock, description, cost, categories } = req.body;
        // Los multipart forms no aceptan como tal arreglos por lo que recibiremos una cadena con los id's de las
        // categorias
        const catArray = categories.split(',');
        console.log(catArray);

        // Obtenemos el nombre de la imagen
        const image = req.file.filename;

        const newProduct = new Product({name, stock, description, cost, image, categories: catArray});
        await newProduct.save();

        // Actualizamos las categorias
        await Category.updateMany({ '_id': newProduct.categories }, { $push: { products: newProduct._id } });

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
    const product = await Product.findByIdAndDelete(id);
    await Category.updateMany({ '_id': product.categories }, { $pull: { products: product._id } });
    res.status(200).json({
        server: 'Producto eliminado'
    });
}

module.exports = productController