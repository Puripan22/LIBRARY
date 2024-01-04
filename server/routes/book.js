const express = require('express')
const router = express.Router()
const {upload} = require('../controller/book')
const { requireLogin } = require('../middleware/middleware')
router.post('/upload',requireLogin,upload)

module.exports = router