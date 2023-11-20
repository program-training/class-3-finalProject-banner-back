import mongoose, { Schema, Model } from 'mongoose';
import  { UserInterface } from '../../resource/users/interfaces/UserInterface';

const userSchema = new Schema<UserInterface>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true}
  }
);

const UserModel: Model<UserInterface> = mongoose.model('user', userSchema);

export default UserModel;
