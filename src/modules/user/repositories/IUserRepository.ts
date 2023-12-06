import { IUser } from '../models/IUser';

export interface IUserDTO {
  username: string;
  password: string;
}

export interface IUserRepository {
  createUser: ({ username, password }: IUserDTO) => Promise<IUser>;
  loginUser: ({ username, password }: IUserDTO) => Promise<IUser>;
}
