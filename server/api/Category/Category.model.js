import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export default mongoose.model('category', CategorySchema);
