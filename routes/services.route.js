const getAllServices = require("../controllers/services.controllers");

const router = require("express").Router();

router.get("/", getAllServices)

module.exports = router;