const multer = require("multer");
const path = require("path");
// Set the storage engine for Multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Unique file name
  },
});



// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });


module.exports = {
  storage
};