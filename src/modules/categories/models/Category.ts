import { Schema, model } from 'mongoose';
import { ICategory } from './ICategory';

const categoriesSchema = new Schema<ICategory>(
  {
    title: { type: String, required: true },
  },
  { timestamps: true },
);

export const Category = model<ICategory>('Category', categoriesSchema);
