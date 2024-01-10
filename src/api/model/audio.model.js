const mongoose = require("mongoose");
const schema = new mongoose.Schema(
    {
        name: {
        type: String,
        require: true,
        trim: true,
      },
      image: {
        type: String,
        require: true,
      },
      desc: {
        type: String,
        require: true,
      },
      audio: {
        type: String,
      }
    },
    { timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true} }
  );


  module.exports = mongoose.model("Audio", schema);
