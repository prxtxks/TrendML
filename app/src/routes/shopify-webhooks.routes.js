const express = require('express');
const router = express.Router();
const verifyWebhook = require('../middlewares/verify-webhook');
const { handleOrderCreate, handleProductUpdate } = require('../controllers/webhook.controller');

router.post('/orders-create', verifyWebhook(process.env.SHOPIFY_WEBHOOK_SECRET), handleOrderCreate);
router.post('/products-update', verifyWebhook(process.env.SHOPIFY_WEBHOOK_SECRET), handleProductUpdate);

module.exports = router;