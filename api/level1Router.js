const express = require('express');
const Message = require('../models/message.js');
const tokencheck = require('../util/tokencheck.js');

const router = express.Router();

// token check
router.use(tokencheck);

// permissionLevel check
router.use((req, res, next) => {
  const { permissionLevel } = req.userData;
  if (permissionLevel === 1 || permissionLevel === 2) next();
  else {
    let err = new Error('Unauthorized');
    err.status = 403;
    next(err);
    return;
  }
});

// get the messaged assigned for approval
router.get('/getassignment', async (req, res, next) => {
  try {
    const data = await Message.find({ coreEmail: req.userData.email }).lean();
    res.status(200).json({ ok: 1, data });
  } catch (err) {
    next(err);
  }
});

// approval/denial of messages by core
router.post('/approval', async (req, res, next) => {
  try {
    // get the ObjectID and the approval status of the message from the body.
    // 'approved' is a boolean value, true indicating approved and false indicating denied
    const { messageId, approved } = req.body;
    if (typeof messageId !== 'string') {
      let err = new Error('parameter messageId must be a string value');
      err.status = 400;
      next(err);
      return;
    }
    if (typeof approved !== 'boolean') {
      let err = new Error('parameter approved must be a boolean value');
      err.status = 400;
      next(err);
      return;
    }

    // update the status of the message
    const { n, nModified } = await Message.updateOne(
      { coreId: req.userData.bitsId, _id: mongoose.Types.ObjectId(messageId) },
      { status: approved ? 1 : 2 }
    );

    if (n !== 1) {
      let err = new Error('Message not found');
      next(err);
      return;
    }
    if (nModified !== 1) {
      let err = new Error('Message status update failed');
      next(err);
      return;
    }

    res.status(200).json({ ok: 1 });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
