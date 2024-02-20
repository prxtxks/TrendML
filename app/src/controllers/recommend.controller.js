const MLService = require('../services/ml.service');

exports.getRecommendations = async (req, res) => {
    try {
        const recommendations = await MLService.fetchRecommendations(req.query.userId);
        res.json(recommendations);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching recommendations', error: err.message });
    }
};