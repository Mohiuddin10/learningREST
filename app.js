const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const usersRoute = require("./routes/users.route")

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

    
// show users 

app.use("/users", usersRoute)


// Home route setup 
app.get("/", (req, res) => {
    // res.send("your app is running without any issue")
    res.sendFile(__dirname + "/views/index.html");
})

// invalid route set 
app.use((req, res, next) => {
    res.status(404).json({message: "bad request"})
})

// server error 
app.use((err, req, res, next) => {
    res.status(500).json({message: "something broke"})
})

module.exports = app; 