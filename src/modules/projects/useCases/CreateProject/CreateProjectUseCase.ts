import { IProject } from '../../models/IProject';
import { IProjectRepository } from '../../repositories/IProjectsRepository';

interface IRequest {
  photos: {
    filename: string;
    destination: string;
  }[];
  title: string;
  description: string;
  categories: string[];
  appLink: string;
  gitHub: string;
  recycling: boolean;
}

class CreateProjectUseCase {
  constructor(private projectRepositoru: IProjectRepository) {}

  async execute({
    photos,
    title,
    description,
    categories,
    appLink,
    gitHub,
    recycling,
  }: IRequest): Promise<IProject> {
    return await this.projectRepositoru.createProject({
      photos,
      title,
      description,
      categories,
      appLink,
      gitHub,
      recycling,
    });
  }
}

export default CreateProjectUseCase;
