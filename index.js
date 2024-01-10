require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || "5000";
require("./src/db/database");
const app = express();
const routes = require("./src/api/routes");
const path = require("path");
const multer = require('multer');
const fs = require('fs');
app.use(express.json());
app.use(cors());
const Audio = require("./src/api/model/audio.model")
app.use(express.json());

const routes = require("./src/api/routes");


app.use("/api", routes);

app.listen(port, () => console.log(`Server is running on ${port}`));