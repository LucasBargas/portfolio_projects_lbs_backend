import { IUserRepository, IUserDTO } from '../../repositories/IUserRepository';

class EditUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    id,
    email,
    username,
    fullName,
    bio,
    linkedin,
    gitHub,
    whatsapp,
  }: IUserDTO): Promise<IUserDTO> {
    return await this.userRepository.editUser({
      id,
      email,
      username,
      fullName,
      bio,
      linkedin,
      gitHub,
      whatsapp,
    });
  }
}

export default EditUserUseCase;
