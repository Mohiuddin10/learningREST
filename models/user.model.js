const {v4:uuidv4} = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Mohammad Mohiuddin",
        email: "sj@gmail.com",
    },
    {
        id: uuidv4(),
        username: "Mohammad Mainuddin",
        email: "sam@gmail.com",
    }
]

module.exports = users;
