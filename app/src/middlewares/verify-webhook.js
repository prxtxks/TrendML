// Middleware to verify webhook signatures
const crypto = require('crypto');

const verifyWebhook = (secret) => (req, res, next) => {
    const hmac = req.get('X-Shopify-Hmac-Sha256');
    const body = req.rawBody || JSON.stringify(req.body);
    const hash = crypto
        .createHmac('sha256', secret)
        .update(body, 'utf8')
        .digest('base64');

    if (hash === hmac) {
        next();
    } else {
        res.status(401).send('Unauthorized webhook request');
    }
};

module.exports = verifyWebhook;