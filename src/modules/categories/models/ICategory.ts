import { Document } from 'mongoose';

export interface ICategory extends Partial<Document> {
  title: string;
}
