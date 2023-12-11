const controller = require("../controllers/controllers");
const express = require("express");
const router = express.Router();

// get route to generate a random number
router.get("/api/random", controller.getRandomNumber);
module.exports = router;