const Banner = require("../models/Banner");
const Project = require("../models/Project");
const Blog = require("../models/Blog");
const Service = require('../models/Service');
const Customer = require('../models/Customer');
const Product = require('../models/Product');
const Job = require('../models/Job');
const Volentear = require('../models/Volentear');

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
    const projects = await Project.find({}).sort({ createdAt: -1 });
    const customers = await Customer.find({}).sort({ createdAt: -1 });


    res.render("service", {
      services: services,
      projects: projects,
      customers: customers
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

    const products = await Product.find({}).sort({ createdAt: -1 });

    // console.log("product", products)

    res.render("products", {
      products: products
    });
  } catch (error) {
    next(error);
  }
};


exports.get_home_volentears = async (req, res, next) => {
  try {
    const volunteers = await Volentear.find({}).sort({ createdAt: -1 });

    res.render('volentear', {
      volunteers: volunteers
    })
  } catch (error) {
    next(error)
  }
}


exports.get_home_jobs = async (req, res, next) => {
  try {
    const jobs = await Job.find({}).sort({ createdAt: -1 });

    res.render('hiring', {
      jobs: jobs
    })
  } catch (error) {
    next(error)
  }
}



exports.get_home_about = async (req, res, next) => {
  try {
    res.render('about')
  } catch (error) {
    next(error)
  }
}