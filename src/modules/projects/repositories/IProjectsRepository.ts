export interface IProjectDTO {
  id?: string;
  photos: string[];
  title: string;
  description: string;
  categories: string[];
  appLink: string;
  frontEndRepo: string;
  backEndRepo: string;
  trash?: boolean;
}

export interface IProjectRepository {
  createProject: ({
    photos,
    title,
    description,
    categories,
    appLink,
    frontEndRepo,
    backEndRepo,
  }: IProjectDTO) => Promise<IProjectDTO>;

  updateProjectById: ({
    id,
    photos,
    title,
    description,
    categories,
    appLink,
    frontEndRepo,
    backEndRepo,
  }: IProjectDTO) => Promise<IProjectDTO>;

  deleteProjectById: (id: string) => Promise<IProjectDTO>;

  listProjects: () => Promise<IProjectDTO[]>;

  listProjectsInTrash: () => Promise<IProjectDTO[]>;

  projectById: (id: string) => Promise<IProjectDTO>;

  projectInTrashById: (id: string) => Promise<IProjectDTO>;
}
