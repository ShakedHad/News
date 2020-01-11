// Here we will create the ExampleModal mongoose modal
import { Schema, model } from 'mongoose';

const exampleModelSchema = new Schema({
    title: String,
});

export default model('ExampleModel', exampleModelSchema);