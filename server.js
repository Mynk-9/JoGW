const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const fs = require('fs');
const servePage = require('./util/servePage');

// Development environment variables
require('dotenv').config();

// Connection to database
require('./dbconfig/connect')();

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
const level0Router = require('./api/level0Router.js');
const level1Router = require('./api/level1Router.js');
const level2Router = require('./api/level2Router');

// APIs
app.use('/api/user', userRouter);
app.use('/api/level0', level0Router);
app.use('/api/level1', level1Router);
app.use('/api/level2', level2Router);

// 404 Handler
app.use((req, res, next) => {
  let err = new Error('undefined route');
  err.status = 404;
  next(err);
});

// Final error handler
app.use(async (err, req, res, next) => {
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
