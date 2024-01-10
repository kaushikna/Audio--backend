const { StatusCodes } = require("http-status-codes");
const User = require("../model/user.model");




const logIn = async (req, res) => {
    try {
      const { email, password, isAdmin } = req.body;
  
      let user = await User.findOne({ email: email }).select("+hash_password");
      if (!user) {
        throw new Error("User Not found.");
      }

      user = await user.save();
  
      res.status(StatusCodes.OK).json({
        message: `Welcome, ${user.email}`,
        data: {
          user,
          
        },
      });
    } catch (err) {
      console.log(err);
      res.status(StatusCodes.BAD_REQUEST).json({
        message: err.message,
      });
    }
  };
  
  const register = async (req, res) => {
    try {
      const { firstName, lastName, userName, email, password, contactNumber } =
        req.body;
  
      const userExists = await User.findOne({ email });
      if (userExists) {
        throw new Error("User already registered");
      }
      let user = new User({
        email,
        hash_password: User.hashPassword(password),
      });
      user = await user.save();
  
     
      return res.status(StatusCodes.CREATED).json({
        message: "Registration Successful",
      });
    } catch (err) {
      console.log(err);
      res.status(StatusCodes.BAD_REQUEST).json({
        message: err.message,
      });
    }
  };



  module.exports = {
    logIn,
    register
  };