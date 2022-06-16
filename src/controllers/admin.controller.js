const User = require("../models/User");
const Feedback = require("../models/Feedback");

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

exports.get_feedbacks = async (req, res, next) => {
  try {
    const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });

    res.render('admin/feedback', {
      feedbacks: feedbacks
    })
  } catch (error) {
    next(error)
  }
}