// Shopify API config
module.exports = {
    API_KEY: process.env.SHOPIFY_API_KEY,
    API_SECRET: process.env.SHOPIFY_API_SECRET,
    SCOPES: process.env.SHOPIFY_SCOPES || 'read_products,write_products',
    HOST: process.env.SHOPIFY_HOST,
};