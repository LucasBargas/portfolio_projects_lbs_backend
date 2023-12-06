import { Document } from 'mongoose';

export interface IUser extends Partial<Document> {
  email: string;
  username: string;
  password: string;
}
