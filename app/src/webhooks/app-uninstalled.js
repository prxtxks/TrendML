// app-uninstalled.js
module.exports = async (req, res) => {
    const shopDomain = req.body.myshopify_domain;
    console.log('App uninstalled from shop:', shopDomain);

    // Clean up shop data in database
    res.status(200).send({ message: 'Uninstall webhook processed' });
};