const verifyToken = require("./verifyToken");
const validateGrants = require("./validateGrants");
const isAdmin = require("./isAdmin");
const isAdvisor = require("./isAdvisor");
const isCoordinator = require("./isCoordinator");
const isCustomer = require("./isCustomer");
const isShopping = require("./isShopping");
const isTechnical = require("./isTechnical");

module.exports = {
  isAdmin,
  isAdvisor,
  isCoordinator,
  isCustomer,
  isShopping,
  isTechnical,
  verifyToken,
  validateGrants,
};
