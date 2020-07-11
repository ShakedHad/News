import { AsyncRouter } from 'express-async-router';
import { getAllPosts, addPost, getPost } from './Post.controller';

const router = AsyncRouter();

router.get('/', getAllPosts);
router.get('/:id', getPost);
router.put('/', addPost);

export default router;
