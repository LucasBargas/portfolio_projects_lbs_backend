import {
  IProjectDTO,
  IProjectRepository,
} from '../../repositories/IProjectsRepository';

class ProjectByIdUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(id: string): Promise<IProjectDTO> {
    return this.projectRepository.projectById(id);
  }
}

export default ProjectByIdUseCase;
