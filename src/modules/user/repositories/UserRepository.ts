// import mongoose from 'mongoose';
import { IUserRepository, ICreateUserDTO } from './IUserRepository';
// import { User } from '../models/User';
import { IUser } from '../models/IUser';

class UserRepository implements IUserRepository {
  constructor() {}

  async createUser({
    email,
    username,
    password,
    confirmPassword,
  }: ICreateUserDTO): Promise<IUser> {
    const test = { email, username, password, confirmPassword };
    return test;
  }
}

export default UserRepository;
