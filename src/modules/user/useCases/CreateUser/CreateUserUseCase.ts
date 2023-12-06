import { IUser } from '../../models/IUser';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  username: string;
  password: string;
  // confirmPassword: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ username, password }: IRequest): Promise<IUser> {
    return await this.userRepository.createUser({
      username,
      password,
    });
  }
}

export default CreateUserUseCase;
