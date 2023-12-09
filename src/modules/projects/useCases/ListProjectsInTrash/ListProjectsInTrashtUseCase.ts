import {
  IProjectDTO,
  IProjectRepository,
} from '../../repositories/IProjectsRepository';

class ListProjectsInTrashUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(): Promise<IProjectDTO[]> {
    return await this.projectRepository.listProjectsInTrash();
  }
}

export default ListProjectsInTrashUseCase;
