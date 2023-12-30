const express = require('express');
const router = express.Router();
const { login } = require('../controller/auth');

// Handle POST request to /login
router.post('/login', login);

// Export the router so that it can be used in other files
module.exports = router;
