// Middleware is just a function that has access to the req & res cycle and req & res object whenever we hit any endpoint
// So whenever an endpoint is hit, we can fire off the middleware

const jwt = require('jsonwebtoken');
const config = require('config');

// This is the middleware function
module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token'); // 'x-auth-token' is the key to the token in the header

  // Check if there is NOT a token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' }); // This only pertains to protected routes
  }

  // If there IS a token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret')); // verify takes in the token and the secret from config
    // at this point decoded is the entire jwt (alg, type, iat, exp, and the user object with mongo id we signed in the routes)

    req.user = decoded.user; // set req.user to the user in the jwt payload *so that we have access to user in the route*
    next(); // move on
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' }); // if it doesn't verify, send msg
  }
};
