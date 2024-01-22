const express = require('express')
const router = express.Router()
const {getComment} = require('../controller/comment')

router.post('/getComment',getComment)

module.exports = router