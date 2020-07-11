import { AsyncRouter } from 'express-async-router';
import { getCategories } from './Category.controller';

const router = AsyncRouter();

router.get('/', getCategories);

export default router;
