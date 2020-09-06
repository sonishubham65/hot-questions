const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: '_warning.log', level: 'warning' }),
    ],
});


logger.log({
    level: 'info',
    message: 'Hello distributed warning!'
});

logger.info('Hello again distributed logs');


