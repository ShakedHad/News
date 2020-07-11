import { Schema, model } from 'mongoose';

const adminSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

export default model('admin', adminSchema);
