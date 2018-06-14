import express from 'express';
import cors from 'cors';

import config from './config';
import logger from './logger';

const app = express();

app.use('*', cors({ origin: '*' }));

app.listen(config.port, () => {
  logger.info(`server running on port ${config.port}`);
});
