/*
Middleware from official Auth0 website to protect private
*/
// const jwt = require("express-jwt");
// const jwksRsa = require("jwks-rsa");

// const { domain, audience } = require("../config/env.dev");
// const protect = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://${domain}/.well-known/jwks.json`,
//   }),

//   audience: audience,
//   issuer: `https://${domain}/`,
//   algorithms: ["RS256"],
// });

/*
Middleware for custom register/login logic made by myself with JWT auth. 
*/
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = {
  protect,
};
