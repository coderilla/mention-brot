import { Router as createRouter, Request, Response } from 'express';

import config from '../config';

const router = createRouter();

router.get(config.healthRoutePath, (req: Request, res: Response) => {
  res.json({
    status: 'OK',
  });
});

export default router;
