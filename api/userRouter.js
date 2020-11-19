const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user.js');
const oauthpipeline = require('../util/oauth.js');
const jwt = require('jsonwebtoken');
const JWTKEY = process.env.JWTKEY;

const router = express.Router();

router.get('/oauthlogin', async (req, res, next) => {
  try {
    const email = await oauthpipeline(req, next);
    console.log(email);
    const user = await User.findOne({ email }).lean();
    if (!user) {
      let err = new Error('User not found');
      err.status = 401;
      next(err);
      return;
    }
    const { name, bitsId } = user;
    const token = jwt.sign(
      { email, name, bitsId, nonce: Math.random(10000) },
      JWTKEY,
      { expiresIn: '1d' }
    );
    res.status(200).json({ ok: 1, token });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
