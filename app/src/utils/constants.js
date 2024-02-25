// constants.js
module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'supersecretkey',
    SHOPIFY_API_VERSION: '2023-10',
    APP_NAME: 'TrendML Shopify App',
    ML_API_URL: process.env.ML_API_URL || 'http://localhost:8000'
};