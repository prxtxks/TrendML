// app/src/services/shopify.service.js
const axios = require('axios');

class ShopifyService {
    constructor(shop, accessToken) {
        this.shop = shop;
        this.accessToken = accessToken;
        this.apiBase = `https://${shop}/admin/api/2024-01`;
    }

    async getProducts() {
        const response = await axios.get(`${this.apiBase}/products.json`, {
            headers: { 'X-Shopify-Access-Token': this.accessToken }
        });
        return response.data.products;
    }

    async updateProduct(productId, data) {
        const response = await axios.put(`${this.apiBase}/products/${productId}.json`, { product: data }, {
            headers: { 'X-Shopify-Access-Token': this.accessToken }
        });
        return response.data.product;
    }
}

module.exports = new ShopifyService(process.env.SHOP, process.env.SHOPIFY_ACCESS_TOKEN);