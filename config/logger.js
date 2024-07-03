const winston = require('winston');

// Create a logger
const logger = winston.createLogger({
    level: 'info', // Minimum log level to record (e.g., 'error', 'warn', 'info', 'debug')
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(), // Format logs in JSON format
    ),
    transports: [
        new winston.transports.Console(), // Log to console
        new winston.transports.File({
            filename: 'logs/app.log', // Name of the log file
            level: 'info' // Minimum log level for this file (e.g., 'error', 'warn')
        })
    ]
});

module.exports = logger;  // Export the logger instance
