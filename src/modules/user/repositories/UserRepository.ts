import { IUserRepository, IUserDTO } from './IUserRepository';
import { User } from '../models/User';
import { IUser } from '../models/IUser';

class UserRepository implements IUserRepository {
  constructor() {}

  async createUser({ username, password }: IUserDTO): Promise<IUser> {
    const newUser = { username, password };

    await User.create(newUser);
    return newUser;
  }

  async loginUser({ username, password }: IUserDTO): Promise<IUser> {
    const user = { username, password };
    return user;
  }
}

export default UserRepository;
