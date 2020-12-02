const express = require('express');
const Message = require('../models/message.js');
const User = require('../models/user');
const tokencheck = require('../util/tokencheck.js');

const router = express.Router();

// token check
router.use(tokencheck);

// permissionLevel check
router.use((req, res, next) => {
  if (req.userData.permissionLevel === 2) next();
  else {
    let err = new Error('Unauthorized');
    err.status = 403;
    next(err);
    return;
  }
});

//update permission level of a user
router.post('/changeperm', async (req, res, next) => {
  try {
    const { email, permissionLevel } = req.body;
    const user = await User.updateOne({ email }, { permissionLevel });
    if (!user) {
      next(new Error("Couldn't update the permission level"));
    }
    return res.status(200).json({ ok: 1 });
  } catch (err) {
    next(err);
  }
});

router.post('/assignMessage', async (req, res, next) => {
  try {
    //messageId is an array of IDs
    const { email, messageId } = req.body;
    const count = 0;
    messageId.forEach(async (id) => {
      const message = await Message.findOneAndUpdate(
        { _id: id },
        { coreId: email }
      );
      if (!message) {
        count++;
      }
    });
    if (count > 0) {
      next(new Error(`Error in assigning ${count} messages`));
    }
    return res.status(200).json({ ok: 1 });
  } catch (err) {
    next(err);
  }
});

router.post('/approveMessage', async (req, res, next) => {
  //both are arrays
  try {
    const { approveId, disapproveID } = req.body;
    const count1 = 0;
    const count2 = 0;
    approveId.forEach(async (id) => {
      const message = await Message.findOneAndUpdate(
        { _id: id },
        { status: 3 }
      );
      if (!message) {
        count1++;
      }
    });
    disapproveID.forEach(async (id) => {
      const message = await Message.findOneAndUpdate(
        { _id: id },
        { status: 4 }
      );
      if (!message) {
        count2++;
      }
    });

    if (count1 + count2 > 0) {
      next(
        new Error(`Could approve ${count1} and disapprove ${count2} messages `)
      );
    }

    return res.status(200).json({ ok: 1 });
  } catch (err) {
    next(err);
  }
});

router.get('/statistics', async (req, res, next) => {
  try {
    const pipeline = [
      {
        $match: {
          status: 0,
        },
      },
      {
        $group: {
          _id: { name: '$coreId' },
          total: { $sum: 1 },
        },
      },
    ];
    const data = await Message.aggregate(pipeline);
    return res.status(200).json({ ok: 1, data });
  } catch (err) {
    next(err);
  }
});

router.get('/finalapproval', async (req, res, next) => {
  try {
    const approved = await Messages.find({ status: 1 }).lean();
    const denied = await Messages.find({ status: 2 }).lean();
    const data = { approved, denied };
    return res.status(200).json({ ok: 1, data });
  } catch (err) {
    next(err);
  }
});

router.get('/coreMembers', async (req, res, next) => {
  try {
    const members = await User.find(
      { permissionLevel: 1 },
      'email bitsId name'
    ).lean();
    return res.status(200).json({ ok: 1, members });
  } catch (err) {
    next(err);
  }
});

router.get('/unassignedMessages', async (req, res, next) => {
  try {
    const messages = await Message.find(
      { status: 0 },
      'body senderEmail receiverEmail'
    ).lean();
    return res.status(200).json({ ok: 1, messages });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
