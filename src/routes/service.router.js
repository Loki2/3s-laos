const express = require("express");
const { authenticated } = require("../middleware/authHandler");
const {
  get_services,
  get_createServices,
  post_createServices,
  get_updateServices,
  post_updateServices,
  get_deleteServices,
} = require("../controllers/service.controller");

const router = express.Router();

router.get("/", authenticated, get_services);

router.get("/create-service", authenticated, get_createServices);

router.post("/create-service", authenticated, post_createServices);

// router.get('/view/:id', authenticated, get_viewServices);

router.get("/edit/:id", authenticated, get_updateServices);

router.post("/edit/:id", authenticated, post_updateServices);

router.get("/delete/:id", authenticated, get_deleteServices);

module.exports = router;
