import express from 'express';
import morgan from 'morgan';
import path from 'path';
import router from '../api';

export default () => {
    const app = express();
    app.use('/assets', express.static('assets'));
    app.use(morgan('dev', { immediate: true }));
    app.use(express.json());
    
    app.use('/public', express.static('./dist/public'));
    app.use('/api', router);
    app.get('/', (req, res) => {
        res.redirect('/public/index.html');
    });

    app.listen(process.env.HOST_PORT, () => console.log(`Listening on port ${process.env.HOST_PORT}`));
};