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

// update user 
const updateUser = (req, res) => {
    const userID = req.params.id;
    const { username, email } = req.body;
    users
        .filter((user) => user.id == userID)
        .map((selectedUser) => {
            console.log(selectedUser);
            console.log(selectedUser);
            selectedUser.username = username;
            selectedUser.email = email;

        })
    res.status(200).json(users);
}

module.exports = { getAllUsers, createUser, updateUser };