import { IProject } from '../models/IProject';

export interface IProjectDTO {
  id?: string;
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

export interface IProjectRepository {
  createProject: ({
    photos,
    title,
    description,
    categories,
    appLink,
    gitHub,
  }: IProjectDTO) => Promise<IProject>;

  updateProjectById: ({
    id,
    photos,
    title,
    description,
    categories,
    appLink,
    gitHub,
  }: IProjectDTO) => Promise<IProject>;

  listProjects: () => Promise<IProject[]>;

  listProjectsInTrash: () => Promise<IProject[]>;

  projectById: (id: string) => Promise<IProject>;

  projectInTrashById: (id: string) => Promise<IProject>;
}
