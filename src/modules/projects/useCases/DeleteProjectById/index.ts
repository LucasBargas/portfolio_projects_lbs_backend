import ProjectsRepository from '../../repositories/ProjectsRepository';
import DeleteProjectByIdUseCase from './DeleteProjectByIdUseCase';
import DeleteProjectByIdController from './DeleteProjectByIdController';

const projectsRepository = new ProjectsRepository();
const deleteProjectByIdUseCase = new DeleteProjectByIdUseCase(
  projectsRepository,
);
const deleteProjectByIdController = new DeleteProjectByIdController(
  deleteProjectByIdUseCase,
);

export default deleteProjectByIdController;
