import { IUser } from '../models/IUser';

export interface ICreateUserDTO {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface IUserRepository {
  createUser: ({
    email,
    username,
    password,
    confirmPassword,
  }: ICreateUserDTO) => Promise<IUser>;
}
