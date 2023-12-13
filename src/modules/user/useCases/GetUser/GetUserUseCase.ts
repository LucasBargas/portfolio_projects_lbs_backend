import { IUserRepository, IUserDTO } from '../../repositories/IUserRepository';

class GetUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<IUserDTO> {
    return await this.userRepository.getUser();
  }
}

export default GetUserUseCase;
