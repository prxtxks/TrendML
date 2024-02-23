// app/src/services/sync.service.js
const ProductService = require('./product.service');

class SyncService {
    async syncProducts() {
        const products = await ProductService.fetchAllProducts();
        console.log(`Synced ${products.length} products`);
        return products;
    }
}

module.exports = new SyncService();