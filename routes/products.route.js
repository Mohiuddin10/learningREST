const {getAllProducts, addProducts} = require("../controllers/products.controller");

const router = require("express").Router();

router.get("/", getAllProducts);

router.post("/", addProducts)

module.exports = router;