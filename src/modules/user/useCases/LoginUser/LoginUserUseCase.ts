import { IUserDTO, IUserRepository } from '../../repositories/IUserRepository';

class LoginUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ username, password }: IUserDTO): Promise<IUserDTO> {
    return await this.userRepository.loginUser({
      username,
      password,
    });
  }
}

export default LoginUserUseCase;
