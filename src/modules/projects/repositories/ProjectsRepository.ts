import { IProjectRepository, IProjectDTO } from './IProjectsRepository';
import { IProject } from '../models/IProject';
import { Project } from '../models/Project';

class ProjectsRepository implements IProjectRepository {
  constructor() {}

  AddCategories(categories: string[]) {
    return categories;
  }

  async createProject({
    photos,
    title,
    description,
    categories,
    appLink,
    gitHub,
    recycling,
  }: IProjectDTO): Promise<IProject> {
    const newProject = {
      photos,
      title,
      description,
      categories,
      appLink,
      gitHub,
      recycling,
    };

    this.AddCategories(categories);
    await Project.create(newProject);
    return newProject;
  }
}

export default ProjectsRepository;
