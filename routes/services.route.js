const {getAllServices, postServices} = require("../controllers/services.controllers");
const { route } = require("./users.route");

const router = require("express").Router();

router.get("/", getAllServices)

router.post("/", postServices)

module.exports = router;