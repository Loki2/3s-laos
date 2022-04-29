const express = require('express');
const { authenticated } = require('../middleware/authHandler');
const { get_admin } = require('../controllers/admin.controller')

const router = express.Router();

router.get('/', authenticated, get_admin)

module.exports = router;