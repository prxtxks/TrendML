// app/src/services/ml.service.js
const axios = require('axios');

class MLService {
    constructor() {
        this.apiBase = process.env.ML_API_URL || 'http://localhost:8000';
    }

    async getRecommendations(userId) {
        const response = await axios.get(`${this.apiBase}/recommend?userId=${userId}`);
        return response.data;
    }
}

module.exports = new MLService();