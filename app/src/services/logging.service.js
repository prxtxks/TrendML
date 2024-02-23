// app/src/services/logging.service.js
class LoggingService {
    log(message, level = 'info') {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
    }
}

module.exports = new LoggingService();