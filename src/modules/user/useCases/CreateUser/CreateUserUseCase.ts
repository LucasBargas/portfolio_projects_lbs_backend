import { IUser } from '../../models/IUser';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  email: string;
  username: string;
  password: string;
  // confirmPassword: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email, username, password }: IRequest): Promise<IUser> {
    return await this.userRepository.createUser({
      email,
      username,
      password,
    });
  }
}

export default CreateUserUseCase;
