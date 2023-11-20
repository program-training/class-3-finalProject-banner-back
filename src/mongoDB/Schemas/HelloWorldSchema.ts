import mongoose, { Schema, Model, Types } from 'mongoose';

interface HelloWorld {
  helloWorld: string
}

const userSchema = new Schema<HelloWorld>(
  {
    helloWorld: { type: String, required: true }
  }
);

const HelloWorldModel: Model<HelloWorld> = mongoose.model('helloworld', userSchema);

export default HelloWorldModel;
