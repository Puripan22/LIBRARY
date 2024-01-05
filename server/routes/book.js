const express = require('express')
const router = express.Router()
const {upload, book_table} = require('../controller/book')
const { requireLogin } = require('../middleware/middleware')
router.post('/upload',upload)
router.get('/book_table',book_table)
module.exports = router