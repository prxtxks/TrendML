// app/src/services/product.service.js
const ShopifyService = require('./shopify.service');

class ProductService {
    async fetchAllProducts() {
        return await ShopifyService.getProducts();
    }

    async updateProductStock(productId, stock) {
        return await ShopifyService.updateProduct(productId, { inventory_quantity: stock });
    }
}

module.exports = new ProductService();