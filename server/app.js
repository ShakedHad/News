// Shir Avraham 315005660
// Shaked Hadas 313161200
import dotEnv from 'dotenv-extended';
import startApp from './config/express';
import startMongoose from './config/mongoose';

dotEnv.load();
startMongoose();
startApp();