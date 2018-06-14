import express from 'express';
import cors from 'cors';

import config from './config';
import logger from './logger';
import router from './router';

const app = express();

app.use('*', cors({ origin: '*' }));
app.use(router);

app.listen(config.port, () => {
  logger.info(`server running on port ${config.port}`);
});
