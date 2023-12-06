import jwt from 'jsonwebtoken';
import { IUser } from '../modules/user/models/IUser';

export default class CreateUserToken {
  static async handleCreateUserToken(user: IUser): Promise<string> {
    // Create a token
    const token = jwt.sign(
      {
        name: user.username,
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    return token;
  }
}
