
const router = require("express").Router();
const multer = require("multer");
const { storage } = require("../../helpers/util.helper");
const upload = multer({ storage: storage });


const {
    allAudio,
    getAudio,
    addAudio,
    updateaudio,
    deleteaudio
  } = require("../controllers/audio.controller");
router.get("/audio", allAudio);
router.get("/audio/:id", getAudio);

router.put("/update/:id", updateaudio);
router.post("/create",upload.fields([{ name: 'song', maxCount: 1 }, { name: 'image', maxCount: 1 }]),addAudio)
router.delete("/delete/:id", deleteaudio);


module.exports = router;
