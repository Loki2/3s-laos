const express = require('express');
const { authenticated } = require('../middleware/authHandler');
const { get_admin, get_Organize } = require('../controllers/admin.controller')

const router = express.Router();

router.get('/', authenticated, get_admin);

router.get('/org', authenticated, get_Organize);

module.exports = router;