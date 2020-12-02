const jwt = require('jsonwebtoken');
const JWTKEY = process.env.JWTKEY;

// middleware to check for presence of token in requests and validate them
module.exports = function (req, res, next) {
  try {
    // get the token
    const { token } = req.headers;
    // error if token is missing
    if (!token) {
      let err = new Error('Unauthorized');
      err.status = 403;
      next(err);
      return;
    }

    // verify the token and its hashing algorithm (very important)
    const userData = jwt.verify(token, JWTKEY, {
      algorithms: ['HS256'],
    });

    delete userData.nonce;
    // attach the relevant user data to the request object
    req.userData = userData;
    next();
  } catch (err) {
    // the verify method throws an error if the verification fails
    let error = new Error('Unauthorized');
    error.status = 403;
    next(error);
    return;
  }
};
