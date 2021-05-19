'use stric'
const { findByIdAndUpdate } = require('../models/Product.model');
const Product = require('../models/Product.model');
const OrderProduct = require('../models/OrderProduct.model')
const Order = require('../models/Order.model');
const User = require('../models/User.model');

const orderController = {};

orderController.post = async(req, res) => {
    try {
        const { order } = req.body;
        let orderProducts = [];
        let products = {};
        // Si este ciclo se rompe no se puede realizar la operacion
        for(i in order) {
            const prodReg = await Product.findById(order[i].id);
            if(prodReg === null) throw Error('Not found');
            if(prodReg.stock < order[i].total) throw Error('No stock')
            const newOrderProduct = new OrderProduct({
                name: prodReg.name,
                total: order[i].total,
                description: prodReg.description,
                cost: prodReg.cost,
                image: prodReg.image,
            });
            orderProducts.push(newOrderProduct);
            products[prodReg._id] = prodReg.stock - order[i].total;
        }
        // Actualizar el stock de la tienda
        for (const [key, value] of Object.entries(products)) await Product.findByIdAndUpdate(key, {stock:value});
        // Agregar los elementos comprados a la bd
        for(i in orderProducts) await orderProducts[i].save();
        const userOrder = new Order({date: new Date(), products: orderProducts});
        await userOrder.save();
        const user = await User.findByIdAndUpdate(req.userId, { $push: { order: userOrder } });
        res.status(200).json({
            server: 'Compra realizada'
        });

    } catch(e) {
        console.log(e)
        if(e.message === 'Not found') res.status(404).json({
            server: 'Alguno de los elementos enviados no existe'
        });
        else if(e.message === 'No stock') res.status(401).json({
            server: 'No hay suficiente stock'
        });
        else res.status(500).json(e);
    }
}

module.exports = orderController;