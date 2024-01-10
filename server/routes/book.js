const express = require('express')
const router = express.Router()
const {upload, book_table, book_edit, book_detail} = require('../controller/book')
const { requireLogin } = require('../middleware/middleware')
router.post('/upload',upload)
router.get('/book_table',book_table)
router.put('/book_edit/:book_id',book_edit)
router.get('/book_detail/:book_id',book_detail)
module.exports = router