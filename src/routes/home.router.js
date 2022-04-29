const express = require("express");
const {
  get_home,
  get_service,
  get_service_electrical,
  get_home_products,
} = require("../controllers/home.controller");

const router = express.Router();

router.get("/", get_home);

router.get("/services", get_service);

router.get("/electrical-consult", get_service_electrical);

router.get("/products", get_home_products);

module.exports = router;
