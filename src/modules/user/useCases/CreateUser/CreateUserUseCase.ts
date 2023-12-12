import { IUserDTO, IUserRepository } from '../../repositories/IUserRepository';

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email, username, password }: IUserDTO): Promise<IUserDTO> {
    return await this.userRepository.createUser({
      email,
      username,
      password,
    });
  }
}

export default CreateUserUseCase;
