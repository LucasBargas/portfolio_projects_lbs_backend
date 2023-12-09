import { Document } from 'mongoose';

export interface IProject extends Partial<Document> {
  id?: string;
  photos: string[];
  title: string;
  description: string;
  categories: string[];
  appLink: string;
  gitHub: string;
  trash?: boolean;
}
