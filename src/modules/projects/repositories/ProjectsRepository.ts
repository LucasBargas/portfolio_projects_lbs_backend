import mongoose from 'mongoose';
import { IProjectRepository, IProjectDTO } from './IProjectsRepository';
import { Project } from '../models/Project';
import fs from 'fs';

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
  }: IProjectDTO): Promise<IProjectDTO> {
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

  async updateProjectById({
    id,
    photos,
    title,
    description,
    categories,
    appLink,
    gitHub,
  }: IProjectDTO): Promise<IProjectDTO> {
    try {
      const objId = new mongoose.Types.ObjectId(id);
      const project = await Project.findById(objId);

      project.photos = photos;
      project.title = title;
      project.description = description;
      project.categories = categories;
      project.appLink = appLink;
      project.gitHub = gitHub;

      await project.save();
      return project;
    } catch (error) {
      return error;
    }
  }

  async listProjects(): Promise<IProjectDTO[]> {
    try {
      const projects = await Project.find({ trash: false }).sort('-createdAt');
      return projects;
    } catch (error) {
      return error;
    }
  }

  async listProjectsInTrash(): Promise<IProjectDTO[]> {
    try {
      const projects = await Project.find({ trash: true }).sort('-createdAt');
      return projects;
    } catch (error) {
      return error;
    }
  }

  async projectById(id: string): Promise<IProjectDTO> {
    try {
      const objId = new mongoose.Types.ObjectId(id);
      const project = await Project.findById(objId);

      return project;
    } catch (error) {
      return error;
    }
  }

  async deleteProjectById(id: string): Promise<IProjectDTO> {
    try {
      const objId = new mongoose.Types.ObjectId(id);
      const project = await Project.findById(objId);

      project.photos.forEach((el) => {
        fs.unlink(`src/${el.destination}`, (err) => {
          if (err) throw err;
        });
      });

      await Project.findByIdAndDelete(objId);
      return project;
    } catch (error) {
      return error;
    }
  }

  async projectInTrashById(id: string): Promise<IProjectDTO> {
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
