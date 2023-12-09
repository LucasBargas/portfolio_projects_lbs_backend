import mongoose from 'mongoose';
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
    trash,
  }: IProjectDTO): Promise<IProject> {
    try {
      const newProject = {
        photos,
        title,
        description,
        categories,
        appLink,
        gitHub,
        trash,
      };

      await Project.create(newProject);
      return newProject;
    } catch (error) {
      return error;
    }
  }

  async ListProjects(): Promise<IProject[]> {
    try {
      const projects = await Project.find({ trash: false }).sort('-createdAt');
      return projects;
    } catch (error) {
      return error;
    }
  }

  async ListProjectsInTrash(): Promise<IProject[]> {
    try {
      const projects = await Project.find({ trash: true }).sort('-createdAt');
      return projects;
    } catch (error) {
      return error;
    }
  }

  async ProjectById(id: string): Promise<IProject> {
    try {
      const objId = new mongoose.Types.ObjectId(id);
      const project = await Project.findById(objId);

      return project;
    } catch (error) {
      return error;
    }
  }

  async ProjectInTrashById(id: string): Promise<IProject> {
    try {
      const objId = new mongoose.Types.ObjectId(id);
      const project = await Project.findById(objId);

      project.trash = project.trash ? false : true;

      await project.save();
      return project;
    } catch (error) {
      return error;
    }
  }
}

export default ProjectsRepository;
