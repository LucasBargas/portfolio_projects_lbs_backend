// import mongoose from 'mongoose';
import { IUserRepository, ICreateUserDTO } from './IUserRepository';
import { User } from '../models/User';
import { IUser } from '../models/IUser';

class UserRepository implements IUserRepository {
  constructor() {}

  async createUser({
    email,
    username,
    password,
    confirmPassword,
  }: ICreateUserDTO): Promise<IUser> {
    const newUser = { email, username, password, confirmPassword };

    await User.create(newUser);
    return newUser;
  }
}

export default UserRepository;
