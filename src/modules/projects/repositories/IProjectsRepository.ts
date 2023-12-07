import { IProject } from '../models/IProject';

export interface IProjectDTO {
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
    trash,
  }: IProjectDTO) => Promise<IProject>;

  ListProjects: () => Promise<IProject[]>;
}
