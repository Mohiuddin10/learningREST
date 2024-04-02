const {getAllServices, postServices, updateServices} = require("../controllers/services.controllers");
const { route } = require("./users.route");

const router = require("express").Router();

router.get("/", getAllServices)

router.post("/", postServices)

router.put("/:id", updateServices)

module.exports = router;