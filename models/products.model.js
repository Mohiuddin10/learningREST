const {v4:uuidv4} = require("uuid");

const products = [
    {
        id: uuidv4(),
        productName: "keyboard",
        Price: 1000,
    },
    {
        id: uuidv4(),
        productName: "mouse",
        Price: 500,
    }
]

module.exports = products;