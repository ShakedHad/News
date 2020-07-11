import express from 'express';
import categoryRouter from './Category';
import postRouter from './Post';
import adminRouter from './Admin';

const router = express.Router();

router.use('/categories', categoryRouter);
router.use('/posts', postRouter);
router.use('/admins', adminRouter);

export default router;