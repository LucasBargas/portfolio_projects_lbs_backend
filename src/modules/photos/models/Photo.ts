import { Schema, model } from 'mongoose';
import { IPhoto } from './IPhoto';

const photosSchema = new Schema<IPhoto>(
  {
    filename: { type: String, required: true },
    destination: { type: String, required: true },
  },
  { timestamps: true },
);

export const Photo = model<IPhoto>('photo', photosSchema);
