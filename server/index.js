require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const auth = require('./routes/auth')
const book = require('./routes/book')
const payment = require('./routes/payment')

app.use(express.json())
app.use(cors({
    origin : "http://localhost:5173"
}))

app.use(morgan('dev'))

app.use('/api',auth)
app.use('/api',book)
app.use('/api',payment)

app.listen(8080,()=> console.log(`start server on port 8080`))