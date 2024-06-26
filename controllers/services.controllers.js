let services = require("../models/services.model");
const { v4: uuidv4 } = require("uuid");

const getAllServices = (req, res) => {
    res.status(200).json({ services })
}

const postServices = (req, res) => {
    const newService = {
        id: uuidv4(),
        productName: req.body.productName,
        price: req.body.price,
    }
    services.push(newService);
    res.status(200).json({ services })
}

const updateServices = (req, res) => {
    const serviceID = req.params.id;
    console.log(serviceID);
    const { productName, price } = req.body;
    services
        .filter(service => service.id === serviceID)
        .map(selectedService => {
            selectedService.productName = productName;
            selectedService.price = price;
        })
        res.status(200).json(services)
}

module.exports = { getAllServices, postServices, updateServices };