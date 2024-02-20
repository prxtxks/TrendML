exports.handleOrderCreated = (req, res) => {
    console.log('Order Created Webhook:', req.body);
    res.status(200).send('Order processed');
};

exports.handleProductUpdated = (req, res) => {
    console.log('Product Updated Webhook:', req.body);
    res.status(200).send('Product update processed');
};

exports.handleAppUninstalled = (req, res) => {
    console.log('App Uninstalled Webhook for shop:', req.body.shop);
    res.status(200).send('Uninstall processed');
};