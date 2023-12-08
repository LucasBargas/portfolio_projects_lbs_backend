import ProjectsRepository from '../../repositories/ProjectsRepository';
import ProjectInTrashByIdUseCase from './ProjectInTrashByIdUseCase';
import ProjectInTrashByIdController from './ProjectInTrashByIdController';

const projectsRepository = new ProjectsRepository();
const projectInTrashByIdUseCase = new ProjectInTrashByIdUseCase(
  projectsRepository,
);
const projectInTrashByIdController = new ProjectInTrashByIdController(
  projectInTrashByIdUseCase,
);

export default projectInTrashByIdController;
