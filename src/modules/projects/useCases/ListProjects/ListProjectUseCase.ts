import { IProject } from '../../models/IProject';
import { IProjectRepository } from '../../repositories/IProjectsRepository';

class ListProjectUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(): Promise<IProject[]> {
    return await this.projectRepository.ListProjects();
  }
}

export default ListProjectUseCase;
