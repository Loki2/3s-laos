const express = require('express');
const { authenticated } = require('../middleware/authHandler');
const { get_users, get_addUser, post_addUser, get_profile, get_resetPassowrd, post_resetPassowrd, get_myInform, update_myInform } = require('../controllers/user.controller');


const router = express.Router();

router.get('/', authenticated, get_users);

router.get('/add-user', authenticated, get_addUser);

router.post('/add-user', authenticated, post_addUser);


//Get LoggedinUser Profile
router.get('/profile', authenticated, get_myInform);

router.post('/profile/:id', authenticated, update_myInform);


//Admin manager user profile information
router.get('/:id', authenticated, get_profile);

router.get('/reset-password/:id', authenticated, get_resetPassowrd);

router.post('/reset-password/:id', authenticated, post_resetPassowrd);

module.exports = router;