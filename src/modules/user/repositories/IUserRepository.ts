import { IUser } from '../models/IUser';

export interface ICreateUserDTO {
  username: string;
  password: string;
}

export interface IUserRepository {
  createUser: ({ username, password }: ICreateUserDTO) => Promise<IUser>;
}
