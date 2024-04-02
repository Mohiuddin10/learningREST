let products = require("../models/products.model")
const { v4: uuidv4 } = require("uuid");

const getAllProducts = (req, res) => {
    res.status(200).json({ products })
}

const addProducts = (req, res) => {
    const newProduct = {
        id: uuidv4(),
        productName: req.body.productName,
        price: req.body.price,
    }
    products.push(newProduct);
    res.status(200).json(products)
}

module.exports = { getAllProducts, addProducts };