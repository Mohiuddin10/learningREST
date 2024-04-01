const users =require("../models/user.model")

const getAllUsers = (req, res) => {
    res.status(200).json({ users })
}

module.exports = getAllUsers;