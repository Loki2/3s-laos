const Banner = require("../models/Banner");
const Project = require('../models/Project');


exports.get_home = async (req, res, next) => {
  try {
    const banners = await Banner.find({}).sort({ createdAt: -1 });
    const projects = await Project.find({}).sort({ createdAt: -1 });

    res.render('index', {
      banners: banners,
      projects: projects
    })
  } catch (error) {
    next(error)
  }
}


exports.get_service = async (req, res, next) => {
  try {
    res.render('service')
  } catch (error) {
    next(error)
  }
}

exports.get_service_electrical = async (req, res, next) => {
  try {
    res.render('electrical')
  } catch (error) {
    next(error)
  }
}


exports.get_home_products = async (req, res, next) => {
  try {
    res.render('products')
  } catch (error) {
    next(error)
  }
}