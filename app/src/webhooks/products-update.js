// products-update.js
module.exports = async (req, res) => {
    const product = req.body;
    console.log('Product updated:', product.id);

    // Sync with local database or ML system
    res.status(200).send({ message: 'Product update received' });
};