
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");

const Audio = require("../model/audio.model");

const path = require("path");




const allAudio = async (req, res) => {
    try {
        const items = await Audio.find();
    
        return res.status(StatusCodes.OK).json({
            message: "Fetch all Product",
            data: newItem,
          });
    } catch (err) {
      console.log(err);
      res.status(StatusCodes.BAD_REQUEST).json({
        message: err.message,
      });
    }
  };

  const getAudio= async (req,res) =>{
    try {
        const audioId = req.params.id;
        
        const audio = await Audio.findById(audioId);
    
        if (!audio) {
          return res.status(404).json({ error: 'Item not found' });
        }

        return res.status(StatusCodes.OK).json({
            message: "Fetch all Product",
            data: audio,
          });
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: err.message,
          });
    }
  }

  const addAudio=  async (req,res)=>{
    try{
        const { name,desc } = req.body;
        const song = req.files['song'][0].filename;
        const image = req.files['image'][0].filename;
    
        const newItem = new Audio({ name, song, image,desc });
        await newItem.save();
        return res.status(StatusCodes.CREATED).json({
            message: "Product created successfully",
            data: newItem,
          });
    }
catch(err){
    res.status(StatusCodes.BAD_REQUEST).json({
        message: err.message,
      });
  }
}


const updateaudio= async(req,res) =>{
    try {
        const audioId = req.params.id;

        let audioExist = await Audio.findOne({
          _id: { $not: { $eq: audioId } },
          name,
        });  
          let audio = await Product.findOne({ _id: audioId });
          if (!audio) {
            throw new Error("audio not found.");
          }
        const updatedItem = await Audio.findByIdAndUpdate(req.params.id, { name, song, image,desc }, { new: true });
        audio = await audio.save();

        return res.status(StatusCodes.OK).json({
            message: "Audio updated successfully",
            data: audio,
          });
        res.json(updatedItem);
    } catch (error) {
        
    }
}


const deleteaudio = async (req, res) => {
    try {
      const { id } = req.params;
  
      await Audio.findByIdAndDelete(id);
      return res.status(StatusCodes.OK).json({
        message: "Audio deleted successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(StatusCodes.BAD_REQUEST).json({
        message: err.message,
      });
    }
  };



  module.exports = {
    allAudio,
    getAudio,
    addAudio,
    updateaudio,
    deleteaudio

  };