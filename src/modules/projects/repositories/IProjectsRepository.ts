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
  trash?: boolean;
}

export interface IProjectRepository {
  createProject: ({
    photos,
    title,
    description,
    categories,
    appLink,
    gitHub,
  }: IProjectDTO) => Promise<IProjectDTO>;

  updateProjectById: ({
    id,
    photos,
    title,
    description,
    categories,
    appLink,
    gitHub,
  }: IProjectDTO) => Promise<IProjectDTO>;

  deleteProjectById: (id: string) => Promise<IProjectDTO>;

  listProjects: () => Promise<IProjectDTO[]>;

  listProjectsInTrash: () => Promise<IProjectDTO[]>;

  projectById: (id: string) => Promise<IProjectDTO>;

  projectInTrashById: (id: string) => Promise<IProjectDTO>;
}
