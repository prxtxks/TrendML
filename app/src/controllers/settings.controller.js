const SettingsService = require('../services/settings.service');

exports.getSettings = async (req, res) => {
    try {
        const settings = await SettingsService.fetchSettings(req.query.shopId);
        res.json(settings);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching settings', error: err.message });
    }
};

exports.updateSettings = async (req, res) => {
    try {
        const updated = await SettingsService.updateSettings(req.body.shopId, req.body.settings);
        res.json({ message: 'Settings updated', data: updated });
    } catch (err) {
        res.status(500).json({ message: 'Error updating settings', error: err.message });
    }
};