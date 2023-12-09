import ProjectsRepository from '../../repositories/ProjectsRepository';
import ProjectByIdUseCase from './ProjectByIdUseCase';
import ProjectByIdController from './ProjectByIdController';

const projectsRepository = new ProjectsRepository();
const projectByIdUseCase = new ProjectByIdUseCase(projectsRepository);
const projectByIdController = new ProjectByIdController(projectByIdUseCase);

export default projectByIdController;
