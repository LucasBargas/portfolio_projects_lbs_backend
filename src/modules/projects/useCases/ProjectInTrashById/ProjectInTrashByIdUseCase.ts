import {
  IProjectDTO,
  IProjectRepository,
} from '../../repositories/IProjectsRepository';

class ProjectInTrashByIdUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(id: string): Promise<IProjectDTO> {
    return await this.projectRepository.projectInTrashById(id);
  }
}

export default ProjectInTrashByIdUseCase;
