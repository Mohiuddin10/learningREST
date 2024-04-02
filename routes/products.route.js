const getAllProducts = require("../controllers/products.controller");

const router = require("express").Router();

router.get("/", getAllProducts);

module.exports = router;