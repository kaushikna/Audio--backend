const router = require("express").Router();
const { validate } = require("../../validation/common.validation");
const {
  loginSchema,
  registerSchema,
  
} = require("../../validation/auth.validation");
const {
  logIn,
  register,
 
} = require("../controllers/auth.controller");

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), logIn);

module.exports = router;
