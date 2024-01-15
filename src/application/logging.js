import winston from "winston";

export const logger = winston.createLogger({
    level: "info", // Sets the logging level to "info"
    format: winston.format.json(), // Formats logs as JSON
    transports: [
        new winston.transports.Console({}) // Outputs logs to the console
    ]
});

