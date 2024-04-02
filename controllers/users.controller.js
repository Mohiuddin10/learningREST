let users = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = (req, res) => {
    res.status(200).json({ users })
}

const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,
    }
    console.log(newUser);
    users.push(newUser);
    res.status(200).json({ newUser })
}

module.exports = { getAllUsers, createUser };