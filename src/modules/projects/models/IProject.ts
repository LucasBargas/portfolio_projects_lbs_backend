import { Document } from 'mongoose';

export interface IProject extends Partial<Document> {
  id?: string;
  photos: {
    filename: string;
    destination: string;
  }[];
  title: string;
  description: string;
  categories: string[];
  appLink: string;
  gitHub: string;
  trash?: boolean;
}
