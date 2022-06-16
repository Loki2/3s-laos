const express = require('express');
const { authenticated } = require('../middleware/authHandler');
const { get_admin, get_Organize, get_feedbacks } = require('../controllers/admin.controller')

const router = express.Router();

router.get('/', authenticated, get_admin);

router.get('/org', authenticated, get_Organize);

router.get('/feedbacks', authenticated, get_feedbacks);

module.exports = router;