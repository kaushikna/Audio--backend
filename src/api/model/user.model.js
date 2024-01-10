const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema(
  {
  
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    hash_password: {
      type: String,
      require: true,
      select: false,
    },

  },
  { timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true} }
);

schema.statics.hashPassword = function (password) {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};



module.exports = mongoose.model("User", schema);
