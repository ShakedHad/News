import mongoose from 'mongoose';

export default () => {
    mongoose.connect(process.env.MONGO_HOST, {
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
        useNewUrlParser: true,
    });
};