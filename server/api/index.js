import express from 'express';
import exampleModalRouter from './ExampleModal';

const router = express.Router();

router.get('/', (req, res) => {
    // test route, can be deleted
    console.log('hello');
    res.send('hello');
});

router.use('/exampleModal', exampleModalRouter);

export default router;