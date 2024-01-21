require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); // Import morgan module
const app = express();

const auth = require('./routes/auth');
const book = require('./routes/book');
const payment = require('./routes/payment');
const booking = require('./routes/booking')
const comment = require('./routes/comment')
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.use('/api', auth);
app.use('/api', book);
app.use('/api',booking)
app.use('/api',comment)
// app.use('/api', payment);

app.listen(8080, () => console.log(`Server started on port 8080`));
