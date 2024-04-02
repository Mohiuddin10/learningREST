const products = require("../models/products.model")

const getAllProducts = (req, res) => {
    res.status(200).json({ products })
}

module.exports = getAllProducts;