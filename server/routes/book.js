const express = require('express')
const router = express.Router()
const {upload} = require('../controller/book')

router.post('/upload',upload)

module.exports = router