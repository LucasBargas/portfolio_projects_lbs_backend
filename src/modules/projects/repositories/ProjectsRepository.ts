import { IProjectRepository, IProjectDTO } from './IProjectsRepository';
import { IProject } from '../models/IProject';
import { Project } from '../models/Project';

class ProjectsRepository implements IProjectRepository {
  constructor() {}

  async createProject({
    photos,
    title,
    description,
    categories,
    appLink,
    gitHub,
    recycling,
  }: IProjectDTO): Promise<IProject> {
    try {
      const newProject = {
        photos,
        title,
        description,
        categories,
        appLink,
        gitHub,
        recycling,
      };

      await Project.create(newProject);
      return newProject;
    } catch (error) {
      return error;
    }
  }

  async ListProjects(): Promise<IProject[]> {
    try {
      const projects = await Project.find().sort('-createdAt');
      return projects;
    } catch (error) {
      return error;
    }
  }
}

export default ProjectsRepository;
