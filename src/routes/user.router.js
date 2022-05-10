const express = require('express');
const { authenticated } = require('../middleware/authHandler');
const { get_users, get_profile, get_resetPassowrd, get_myInform } = require('../controllers/user.controller');


const router = express.Router();

router.get('/', authenticated, get_users);

//Get LoggedinUser Profile
router.get('/profile', authenticated, get_myInform);


//Admin manager user profile information
router.get('/:id', authenticated, get_profile);

router.get('/reset-password/:id', authenticated, get_resetPassowrd);

module.exports = router;