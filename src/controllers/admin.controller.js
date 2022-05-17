const User = require("../models/User");

exports.get_admin = async (req, res, next) => {
  try {
    const user = res.locals.user;

    const users = await User.find({}).sort({ createdAt: -1 });

    res.render('admin/index', {
      user: user,
      users: users
    })
  } catch (error) {
    next(error)
  }
  
}

exports.get_Organize = async (req, res, next) => {
  try {
    res.render('admin/organize')
  } catch (error) {
    next(error)
  }
}