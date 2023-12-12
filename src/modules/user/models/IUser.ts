import { Document } from 'mongoose';

export interface IUser extends Partial<Document> {
  email?: string;
  username: string;
  password?: string;
  fullName?: string;
  bio?: string;
  linkedin?: string;
  github?: string;
  whatsapp?: string;
}
