import {
  IProjectDTO,
  IProjectRepository,
} from '../../repositories/IProjectsRepository';

class ListProjectUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(): Promise<IProjectDTO[]> {
    return await this.projectRepository.listProjects();
  }
}

export default ListProjectUseCase;
