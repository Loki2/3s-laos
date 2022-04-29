const express = require("express");
const { authenticated } = require("../middleware/authHandler");
const {
  get_products,
  get_creatProduct,
  post_creatProduct,
  get_viewProduct,
  get_updateProduct,
  post_updateProduct,
  get_deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/", authenticated, get_products);

router.get("/create-product", authenticated, get_creatProduct);

router.post("/create-product", authenticated, post_creatProduct);

router.get("/view/:id", authenticated, get_viewProduct);

router.get("/edit/:id", authenticated, get_updateProduct);

router.post("/edit/:id", authenticated, post_updateProduct);

router.get("/delete/:id", authenticated, get_deleteProduct);

module.exports = router;
