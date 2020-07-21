const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    numberOfViews: {
        type: Number,
        default: 0
    }
});

export default mongoose.model('post', PostSchema);
