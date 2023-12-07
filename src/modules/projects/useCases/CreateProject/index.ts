import ProjectsRepository from '../../repositories/ProjectsRepository';
import CreateProjectUseCase from './CreateProjectUseCase';
import CreateProjectController from './CreateProjectController';

const projectsRepository = new ProjectsRepository();
const createProjectUseCase = new CreateProjectUseCase(projectsRepository);
const createProjectController = new CreateProjectController(
  createProjectUseCase,
);

export default createProjectController;
