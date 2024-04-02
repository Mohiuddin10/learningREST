const {v4:uuidv4} = require("uuid");

const services = [
    {
        id: uuidv4(),
        productName: "Hardware service",
        Price: 30,
    },
    {
        id: uuidv4(),
        productName: "Software service",
        Price: 5,
    }
]

module.exports = services;