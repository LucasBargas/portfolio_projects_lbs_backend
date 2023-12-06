import { Document } from 'mongoose';

export interface IUser extends Partial<Document> {
  username: string;
  password: string;
}
