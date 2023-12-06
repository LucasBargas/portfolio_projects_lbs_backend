import { IUser } from '../../models/IUser';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  username: string;
  password: string;
}

class LoginUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ username, password }: IRequest): Promise<IUser> {
    return await this.userRepository.loginUser({
      username,
      password,
    });
  }
}

export default LoginUserUseCase;
