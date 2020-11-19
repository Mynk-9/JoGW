const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const fs = require('fs');
const servePage = require('./util/servePage');

// Connection to database
require('./dbconfig/connect')();

// Development environment variables
require('dotenv').config();

// Middleware
const app = express();
app.use(morgan('dev'));
app.use(bodyparser.json());

// CORS Handler
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Methods', '*');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next();
});

app.use(express.static('public'));

// Landing page
app.get('/', async (req, res, next) => {
  try {
    servePage(res, './public/index.html');
  } catch (err) {
    next(err);
  }
});

//Routers
const userRouter = require('./api/userRouter.js');

// APIs
app.use('/api/user', userRouter);

// 404 Handler
app.use((req, res, next) => {
  let err = new Error('undefined route');
  err.status = 404;
  next(err);
});

// Final error handler
app.use(async (err, req, res, next) => {
  if (err.status === 404) {
    // insert path to 404 page here
    servePage(res, 'path to 404 page');
    return;
  }

  console.log(err);

  res.status(err.status || 500).json({
    error: err.message,
  });
});

// Run the server
const port = process.env.PORT || 5000;
app.listen(
  {
    port,
    host: '0.0.0.0',
  },
  () => {
    console.log(`Server running on port: ${port}`);
  }
);
