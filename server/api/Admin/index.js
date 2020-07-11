import { AsyncRouter } from 'express-async-router';
import { authenticate } from './Admin.controller';

const router = AsyncRouter();

router.post('/authenticate', authenticate);

export default router;
