import { Document } from 'mongoose';

export interface IProject extends Partial<Document> {
  photos: {
    filename: string;
    destination: string;
  }[];
  title: string;
  description: string;
  categories: string[];
  appLink: string;
  gitHub: string;
  trash: boolean;
}
