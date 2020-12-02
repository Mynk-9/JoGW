const express = require('express');
const Message = require('../models/message.js');
const User = require('../models/user.js');
const tokencheck = require('../util/tokencheck.js');

const router = express.Router();

// token check
router.use(tokencheck);

// search using any of name, bitsId or email
router.post('/search', async (req, res, next) => {
  try {
    const { name, bitsId, email } = req.body;

    // attach the relevant search options, using regex
    let searchOptions = {};

    if (name && typeof name === 'string') {
      searchOptions.name = { $regex: `.*${name}.*` };
    }
    if (bitsId && typeof bitsId === 'string') {
      searchOptions.bitsId = { $regex: `.*${bitsId}.*` };
    }
    if (email && typeof email === 'string') {
      searchOptions.email = { $regex: `.*${email}.*` };
    }

    // search using the provided data
    const data = await User.find(searchOptions, {
      _id: 0,
      permissionLevel: 0,
    }).lean();

    res.status(200).json({ ok: 1, data });
  } catch (err) {
    next(err);
  }
});

// send a message to someone
router.post('/sendmessage', async (req, res, next) => {
  try {
    // get the message body and the email of the receipent (since email is unique)
    const { messageBody, receiverEmail } = req.body;
    // email required
    if (!receiverEmail) {
      let err = new Error('parameter receiverEmail must be present');
      err.status = 400;
      next(err);
      return;
    }

    // message required
    if (!messageBody || typeof messageBody !== 'string') {
      let err = new Error("Empty message can't be sent");
      err.status = 400;
      next(err);
      return;
    }

    // message must not be empty
    let msgarray = messageBody.split(' ').filter((elem) => elem.length > 0);
    if (msgarray.length === 0) {
      let err = new Error("Empty message can't be sent");
      err.status = 400;
      next(err);
      return;
    }

    // message must not exceed 500 words
    if (msgarray.length > 500) {
      let err = new Error('Message must not exceed 500 words');
      err.status = 400;
      next(err);
      return;
    }

    // finally send the message to the database;
    let newmsg = new Message({
      senderEmail: req.userData.email,
      receiverEmail,
      body: messageBody,
      status: 0,
      coreId: null,
    });

    await newmsg.save();
    res.status(200).json({ ok: 1 });
  } catch (err) {
    next(err);
  }
});

// get messages received by the user (only the approved messages)[status: 3]
router.get('/receivedmessages', async (req, res, next) => {
  try {
    const data = await Message.find(
      {
        receiverEmail: req.userData.email,
        status: 3,
      },
      { _id: 0, body: 1 }
    ).lean();

    res.status(200).json({ ok: 1, data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
