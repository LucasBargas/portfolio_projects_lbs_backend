import { IUserDTO, IUserRepository } from '../../repositories/IUserRepository';

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ username, password }: IUserDTO): Promise<IUserDTO> {
    return await this.userRepository.createUser({
      username,
      password,
    });
  }
}

export default CreateUserUseCase;
