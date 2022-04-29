const User = require("../models/User");


//Loggedin User Profile
exports.get_myInform = async (req, res, next) => {
  try {
    const { id } = req.params;

    res.render('admin/users/myInfo');
  } catch (error) {
    next(error)
  }
}

exports.get_users = async (req, res, next) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 })

    console.log("Users:", users)

    res.render('admin/users/index', {
      users: users
    })
  } catch (error) {
    next(error);
  }
}

exports.get_profile = async (req, res, next) => {
  try {
    const { id } = req.params;

    res.render('admin/users/profile');
  } catch (error) {
    next(error)
  }
}

exports.get_resetPassowrd = async (req, res, next) => {
  try {
    const { id } = req.params;

    res.render('admin/users/reset-password');
  } catch (error) {
    next(error)
  }
}