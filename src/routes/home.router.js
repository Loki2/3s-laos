const express = require("express");
const {
  get_home,
  get_service,
  get_service_electrical,
  get_home_products,
  get_home_volentears,
  get_home_jobs,
  get_home_about
} = require("../controllers/home.controller");

const router = express.Router();

router.get("/", get_home);

router.get("/services", get_service);

router.get("/electrical-consult", get_service_electrical);

router.get("/products", get_home_products);

router.get("/volunteers", get_home_volentears);

router.get("/jobs", get_home_jobs);

router.get("/about", get_home_about);

module.exports = router;
