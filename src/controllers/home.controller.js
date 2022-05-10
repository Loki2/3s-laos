const Banner = require("../models/Banner");
const Project = require("../models/Project");
const Blog = require("../models/Blog");
const Service = require('../models/Service');
const Customer = require('../models/Customer');

exports.get_home = async (req, res, next) => {
  try {
    const banners = await Banner.find({}).sort({ createdAt: -1 });
    const projects = await Project.find({}).sort({ createdAt: -1 });
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    const customers = await Customer.find({}).sort({ createdAt: -1 });

    res.render("index", {
      banners: banners,
      projects: projects,
      blogs: blogs,
      customers: customers,
    });
  } catch (error) {
    next(error);
  }
};

exports.get_service = async (req, res, next) => {
  try {
    const services = await Service.find({}).sort({ createdAt: -1 });

    res.render("service", {
      services: services
    });
  } catch (error) {
    next(error);
  }
};

exports.get_service_electrical = async (req, res, next) => {
  try {
    res.render("electrical");
  } catch (error) {
    next(error);
  }
};

exports.get_home_products = async (req, res, next) => {
  try {
    res.render("products");
  } catch (error) {
    next(error);
  }
};
