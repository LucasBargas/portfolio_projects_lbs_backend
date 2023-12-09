import ProjectsRepository from '../../repositories/ProjectsRepository';
import UpdateProjectByIdUseCase from './UpdateProjectByIdUseCase';
import UpdateProjectByIdController from './UpdateProjectByIdController';

const projectsRepository = new ProjectsRepository();
const updateProjectByIdUseCase = new UpdateProjectByIdUseCase(
  projectsRepository,
);
const updateProjectByIdController = new UpdateProjectByIdController(
  updateProjectByIdUseCase,
);

export default updateProjectByIdController;
