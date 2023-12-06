import { IUser } from '../models/IUser';

export interface ICreateUserDTO {
  email: string;
  username: string;
  password: string;
}

export interface IUserRepository {
  createUser: ({ email, username, password }: ICreateUserDTO) => Promise<IUser>;
}
