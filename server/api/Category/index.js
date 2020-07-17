import { AsyncRouter } from 'express-async-router';
import { getCategories, addCategory } from './Category.controller';

const router = AsyncRouter();

router.get('/', getCategories);
router.put('/', addCategory);

export default router;
