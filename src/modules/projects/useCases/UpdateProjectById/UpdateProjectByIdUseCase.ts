import {
  IProjectDTO,
  IProjectRepository,
} from '../../repositories/IProjectsRepository';

class UpdateProjectByIdUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute({
    id,
    photos,
    title,
    description,
    categories,
    appLink,
    gitHub,
    trash,
  }: IProjectDTO): Promise<IProjectDTO> {
    return await this.projectRepository.updateProjectById({
      id,
      photos,
      title,
      description,
      categories,
      appLink,
      gitHub,
      trash,
    });
  }
}

export default UpdateProjectByIdUseCase;
