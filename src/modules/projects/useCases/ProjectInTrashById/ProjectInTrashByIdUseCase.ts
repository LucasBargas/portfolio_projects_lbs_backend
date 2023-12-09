import { IProject } from '../../models/IProject';
import { IProjectRepository } from '../../repositories/IProjectsRepository';

class ProjectInTrashByIdUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(id: string): Promise<IProject> {
    return await this.projectRepository.projectInTrashById(id);
  }
}

export default ProjectInTrashByIdUseCase;
