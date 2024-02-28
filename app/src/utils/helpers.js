// helpers.js
const crypto = require('crypto');

module.exports = {
    generateRandomString(length = 16) {
        return crypto.randomBytes(length).toString('hex');
    },

    formatPrice(price) {
        return `$${price.toFixed(2)}`;
    }
};