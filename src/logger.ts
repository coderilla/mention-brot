import winston from 'winston';

winston.configure({
  level: 'info',
  transports: [new winston.transports.Console()],
});

export default winston;
