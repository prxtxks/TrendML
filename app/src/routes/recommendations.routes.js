const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../controllers/recommend.controller');

router.get('/', getRecommendations);

module.exports = router;