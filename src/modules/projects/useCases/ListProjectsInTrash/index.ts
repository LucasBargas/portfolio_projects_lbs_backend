import ProjectsRepository from '../../repositories/ProjectsRepository';
import ListProjectInTrashUseCase from './ListProjectsInTrashtUseCase';
import ListProjectInTrashController from './ListProjectsInTrashController';

const projectsRepository = new ProjectsRepository();
const listProjectInTrashUseCase = new ListProjectInTrashUseCase(
  projectsRepository,
);
const listProjectInTrashController = new ListProjectInTrashController(
  listProjectInTrashUseCase,
);

export default listProjectInTrashController;
