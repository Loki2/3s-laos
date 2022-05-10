const User = require("../models/User");


//Loggedin User Profile
exports.get_myInform = async (req, res, next) => {
  try {
    const user = res.locals.user;

    console.log("logged in user:", user)

    res.render('admin/users/myInfo', {
      firsname: user.firstname,
      lastname: user.lastname,
      gender: user.gender,
      dob: user.dob,
      bio: user.bio,
      contact: user.contact,
      phone: user.phone,
      address: user.address,
      city: user.city,
      province: user.province,
      country: user.country,
      username: user.username,
      email: user.email,
      image: user.image,
      cover: user.cover,
      joined: user.createdAt
    });
  } catch (error) {
    next(error)
  }
}

exports.get_users = async (req, res, next) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 })

    // console.log("Users:", users)

    res.render('admin/users/index', {
      users: users
    })
  } catch (error) {
    next(error);
  }
}


//Admin browser user profile
exports.get_profile = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    console.log("user information:", user)

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