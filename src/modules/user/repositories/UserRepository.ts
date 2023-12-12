import mongoose from 'mongoose';
import { IUserRepository, IUserDTO } from './IUserRepository';
import { User } from '../models/User';

class UserRepository implements IUserRepository {
  constructor() {}

  async createUser({ email, username, password }: IUserDTO): Promise<IUserDTO> {
    const newUser = { email, username, password };

    await User.create(newUser);
    return newUser;
  }

  async editUser({
    id,
    email,
    username,
    fullName,
    bio,
    linkedin,
    github,
    whatsapp,
  }: IUserDTO): Promise<IUserDTO> {
    try {
      const objId = new mongoose.Types.ObjectId(id);
      const user = await User.findById(objId);

      user.email = email;
      user.username = username;
      user.fullName = fullName;
      user.bio = bio;
      user.linkedin = linkedin;
      user.github = github;
      user.whatsapp = whatsapp;

      await user.save();
      return user;
    } catch (error) {
      return error;
    }
  }

  async loginUser({ username, password }: IUserDTO): Promise<IUserDTO> {
    const user = { username, password };
    return user;
  }
}

export default UserRepository;
