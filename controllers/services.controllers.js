const services = require("../models/services.model");

const getAllServices = (req, res) => {
    res.status(200).json({ services })
}

module.exports = getAllServices;