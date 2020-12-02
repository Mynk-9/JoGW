const express = require('express');
const User = require('../models/user.js');
const oauthpipeline = require('../util/oauth.js');
const jwt = require('jsonwebtoken');
const JWTKEY = process.env.JWTKEY;

const router = express.Router();

router.get('/oauthlogin', async (req, res, next) => {
  try {
    // the oauthpipeline verifies the user and returns the email
    const email = await oauthpipeline(req, next);
    console.log('EMAIL: ' + email);

    // search for the user in the database
    const user = await User.findOne({ email }).lean();
    // error if not found
    if (!user) {
      let err = new Error('User not found');
      err.status = 401;
      next(err);
      return;
    }

    // if user exists, generate the token
    const { name, bitsId, permissionLevel } = user;
    const token = jwt.sign(
      { email, name, bitsId, permissionLevel, nonce: Math.random(10000) },
      JWTKEY,
      { expiresIn: '1d' }
    );

    res.status(200).json({ ok: 1, token });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
