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
  trash: boolean;
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
    trash,
  }: IRequest): Promise<IProject> {
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
