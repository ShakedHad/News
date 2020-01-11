import express from 'express';
import exampleModalRouter from './ExampleModel';
import postRouter from './Post';

const router = express.Router();

router.get('/', (req, res) => {
    // test route, can be deleted
    console.log('hello');
    res.send('hello');
});

router.use('/exampleModal', exampleModalRouter);
router.use('/posts', postRouter);


export default router;