import {
  IProjectDTO,
  IProjectRepository,
} from '../../repositories/IProjectsRepository';

class DeleteProjectByIdUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(id: string): Promise<IProjectDTO> {
    return await this.projectRepository.deleteProjectById(id);
  }
}

export default DeleteProjectByIdUseCase;
