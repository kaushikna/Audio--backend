const { check } = require("express-validator");

const registerSchema = [
 
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Valid Email required"),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 character long")
];

const loginSchema = [
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Valid Email required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Please Enter Valid Password"),
  check("isAdmin").isBoolean().withMessage("Must be a boolean true or false"),
];



module.exports = {
  registerSchema,
  loginSchema,

};
