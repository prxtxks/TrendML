const ProductService = require('../services/product.service');

exports.getProducts = async (req, res) => {
    try {
        const products = await ProductService.fetchAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products', error: err.message });
    }
};

exports.addProduct = async (req, res) => {
    try {
        const product = await ProductService.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: 'Error adding product', error: err.message });
    }
};