const express = require('express');
const router = express.Router();
const { syncProducts } = require('../controllers/product.controller');

router.post('/sync', syncProducts);

module.exports = router;