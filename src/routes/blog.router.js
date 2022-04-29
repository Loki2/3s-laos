const express = require('express');
const { authenticated } = require('../middleware/authHandler');
const { get_blogs } = require('../controllers/blog.controller')

const router = express.Router();

router.get('/', authenticated, get_blogs)

module.exports = router;