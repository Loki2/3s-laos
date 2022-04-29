const express = require('express');
const { get_signup, post_signup, get_signin, post_signin, get_signout } = require('../controllers/auth.controller');
const { authenticated } = require('../middleware/authHandler');
const router = express.Router();


router.get('/signup', get_signup);

router.post('/signup', post_signup);

router.get('/signin', get_signin);

router.post('/signin', post_signin);

router.get('/signout', authenticated, get_signout);



module.exports = router;