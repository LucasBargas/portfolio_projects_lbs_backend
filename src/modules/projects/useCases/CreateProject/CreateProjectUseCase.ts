import {
  IProjectDTO,
  IProjectRepository,
} from '../../repositories/IProjectsRepository';

class CreateProjectUseCase {
  constructor(private projectRepositoru: IProjectRepository) {}

  async execute({
    photos,
    title,
    description,
    categories,
    appLink,
    gitHub,
    trash,
  }: IProjectDTO): Promise<IProjectDTO> {
    return await this.projectRepositoru.createProject({
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

export default CreateProjectUseCase;
