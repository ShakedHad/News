// here we will configure the ExampleModel's router
import { AsyncRouter } from 'express-async-router';
import { getAllPosts, addPost, editPosts, getPost } from './Post.controller';

const router = AsyncRouter();

router.get('/', getAllPosts);
router.get('/:id', getPost);
router.put('/', addPost);
router.post('/', editPosts);

export default router;
