import express from 'express';
import morgan from 'morgan';
import router from '../api';

export default () => {
    const app = express();

    app.use('/static', express.static('../bundle'));
    app.use('/assets', express.static('assets'));
    app.use(morgan('dev', { immediate: true }));

    app.use('/api', router);

    app.listen(process.env.HOST_PORT, () => console.log(`Listening on port ${process.env.HOST_PORT}`));
};