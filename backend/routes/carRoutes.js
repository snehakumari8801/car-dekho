const express = require("express");
const { getRecommendations } = require("../controller/carController");
const router = express.Router();

// const { getRecommendations } = require("../controllers/carController");

router.post("/recommend", getRecommendations);

module.exports = router;