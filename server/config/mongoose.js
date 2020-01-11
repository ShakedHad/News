import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_HOST, {
            user: process.env.MONGO_USER,
            pass: process.env.MONGO_PASS,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error.message);

        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;
