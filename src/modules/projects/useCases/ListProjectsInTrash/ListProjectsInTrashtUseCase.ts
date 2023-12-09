import { IProject } from '../../models/IProject';
import { IProjectRepository } from '../../repositories/IProjectsRepository';

class ListProjectsInTrashUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(): Promise<IProject[]> {
    return await this.projectRepository.listProjectsInTrash();
  }
}

export default ListProjectsInTrashUseCase;
