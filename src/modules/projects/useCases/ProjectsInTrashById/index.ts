import ProjectsRepository from '../../repositories/ProjectsRepository';
import ProjectInTrashByIdUseCase from './ProjectsInTrashByIdUseCase';
import ProjectInTrashByIdController from './ProjectsInTrashByIdController';

const projectsRepository = new ProjectsRepository();
const projectInTrashByIdUseCase = new ProjectInTrashByIdUseCase(
  projectsRepository,
);
const projectInTrashByIdController = new ProjectInTrashByIdController(
  projectInTrashByIdUseCase,
);

export default projectInTrashByIdController;
