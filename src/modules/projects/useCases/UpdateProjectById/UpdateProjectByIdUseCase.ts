import { IProjectRepository } from '../../repositories/IProjectsRepository';
import { IProject } from '../../models/IProject';

interface IRequest {
  id: string;
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
  }: IRequest): Promise<IProject> {
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
