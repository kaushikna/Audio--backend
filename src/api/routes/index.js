const express = require("express");
const router = express.Router();
const authRoute = require("./auth.route");
const userRoute = require("./user.route");

const audioRoute = require("./audio.route")
router.use("/auth", authRoute);
router.use("/user", userRoute);
// router.use("/audio", audioRoute);




module.exports = router;