const bcrypt = require("bcryptjs");
// const { createToken } = require("../utils/tokenHandler");
const {
  validateUsername,
  validateEmail,
  validatePassword,
} = require("../utils/isValidated");
const User = require('../models/User');
const jwt = require('jsonwebtoken');

//create user token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({id}, process.env.APP_SECRET, {
    expiresIn: maxAge
  })
}

exports.get_signup = async (req, res, next) => {
  res.render("signup");
};

exports.post_signup = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    //Check if empty fill
    if (!username || !email || !password || !confirmPassword) {
      res.status(400).json({ message: "Please Fill all require fields...!" });
    }

    console.log(req.body);

    //Validation Username
    const isValidUsername = validateUsername(username);
    if (!isValidUsername) {
      res.status(400).json({
          message: "Please Enter a Username between 3 to 20 characters...",
        });
    }

    //Validation Email
    const isValidEmail = validateEmail(email);
    if(!isValidEmail) {
      res.status(400).json({ message: 'Please Enter Valid Email'});
    }
    
    //Validate Password
    const isValidPassword = validatePassword(password);
    if(!isValidPassword) {
      res.status(400).json({ message: 'Please must be leatst at 6 to 60 charecters'})
    }

    //check matched password
    if(password !== confirmPassword) {
      res.status(400).json({ error: 'Password do not match...!'})
    }

    //Check exist username
    const isUsername = await User.findOne({ username });
    if(isUsername){
      res.status(400).json({ error: 'Username already in used...'})
    }
    
    //Check Existing Email
    const isEmail = await User.findOne({ email });
    if(isEmail) {
      res.status(400).json({ error: 'Email already in used...'})
    }

    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    //Create Token
    const token = createToken(newUser._id);

    //Send Token to fronten
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});

    // Redirect to user dashboard
    res.redirect('/admin');
  } catch (error) {
    next;
  }
};

exports.get_signin = async (req, res, next) => {
  res.render("signin");
};

exports.post_signin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    //Check empty fill
    if(!username || !password) {
      res.status(400).json({ message: 'Please Fill all require fields...!'})
    }

    //Query user from database
    const user = await User.findOne({ username });
    if(!user) {
      res.status(400).json({ message: 'Not found this username, Please signup, try again...!'})
    }

    //Compare Password
    const isPassword = await bcrypt.compare(password, user.password);
    if(!isPassword){
          res.status(400).json({ message: 'Email or Passowrd incorrect...!'})
    }


    //Create Token
    const token = createToken(user._id);

    //Send Token to fronten
    res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});

    res.redirect('/admin');
    
  } catch (error) {
    next(error);
  }
};

// exports.post_signin = async (req, res, next) => {
//   const {username, password} = req.body;
//   try {
//     console.log("input data:", req.body)

//     //check an empty fill
//     if(!(username && password)) {
//       res.status(400).json({ message: 'Please fill all require fields...!' })
//     }

//     //Query user from database with username
//     const data = await client.query(`SELECT * FROM users WHERE username = $1`, [username]);

//     const user = data.rows;

//     console.log("user data:", user)
//     //Check if user not exist
//     if(!user) {
//       res.status(400).json({ message: 'Not found this username, Please signup, try again...!'})
//     }

//     //Check matched password
//     const isPassword = await bcrypt.compare(password, user[0].password);
//     if(!isPassword){
//       res.status(400).json({ message: 'Email or Passowrd incorrect...!'})
//     }

//     //Create Token
//     const token = createToken(user[0].username, user[0].tokenVersion)

//     //Send Token to fronten
//     res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});

//     res.redirect('/admin');

//   } catch (error) {
//     next(error)
//   }
// }

exports.get_signout = async (req, res, next) => {
  try {
    // const isUser = res.locals.user;

    // if(!isUser) return res.status(404).json({ message: 'not user to authenticated...!'})

    // const data = await client.query(`SELECT * FROM users WHERE username = $1`, [isUser.username]);

    // const user = data.rows;

    // console.log('loggedout user:', isUser)

    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/auth/signin");
  } catch (error) {
    next(error);
  }
};