// Middleware to verify Shopify requests
const { SHOPIFY_API_SECRET } = process.env;
const crypto = require('crypto');

const verifyShopify = (req, res, next) => {
    const hmac = req.get('X-Shopify-Hmac-Sha256');
    const body = req.rawBody || JSON.stringify(req.body);
    const hash = crypto
        .createHmac('sha256', SHOPIFY_API_SECRET)
        .update(body, 'utf8')
        .digest('base64');

    if (hash === hmac) {
        next();
    } else {
        res.status(401).send('Unauthorized Shopify request');
    }
};

module.exports = verifyShopify;