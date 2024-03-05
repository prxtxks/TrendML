// orders-create.js
module.exports = async (req, res) => {
    const order = req.body;
    console.log('New order received:', order.id);
    
    // Here you might send order data to ML service
    res.status(200).send({ message: 'Order webhook received' });
};