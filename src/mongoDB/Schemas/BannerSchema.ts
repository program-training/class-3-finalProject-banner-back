import mongoose, { Schema, Model, Types } from 'mongoose';
import BannersInterface from '../../resource/banners/interfaces/BannersInterface';

const userSchema = new Schema<BannersInterface>(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: true},
    author: { type: Schema.Types.ObjectId, required: true},
    createAt: { type: Date, required: true}
  }
);

const UserModel: Model<BannersInterface> = mongoose.model('banner', userSchema);

export default UserModel;
