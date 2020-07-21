import { AsyncRouter } from 'express-async-router';
import { getAllPosts, addPost, getPost, updateViewsNumber } from './Post.controller';

const router = AsyncRouter();

router.get('/', getAllPosts);
router.get('/:id', getPost);
router.put('/', addPost);
router.post('/:id/views', updateViewsNumber)

export default router;
