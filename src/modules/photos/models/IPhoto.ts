import { Document } from 'mongoose';

export interface IPhoto extends Partial<Document> {
  filename: string;
  destination: string;
}
