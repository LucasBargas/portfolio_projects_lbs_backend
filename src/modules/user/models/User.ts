import { Schema, model } from 'mongoose';
import { IUser } from './IUser';

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: false },
    fullName: { type: String, required: false },
    bio: { type: String, required: false },
    linkedin: { type: String, required: false },
    github: { type: String, required: false },
    whatsapp: { type: String, required: false },
  },
  { timestamps: true },
);

export const User = model<IUser>('User', userSchema);
