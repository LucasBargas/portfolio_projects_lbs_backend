import ProjectsRepository from '../../repositories/ProjectsRepository';
import ListProjectUseCase from './ListProjectUseCase';
import ListProjectController from './ListProjectController';

const projectsRepository = new ProjectsRepository();
const listProjectUseCase = new ListProjectUseCase(projectsRepository);
const listProjectController = new ListProjectController(listProjectUseCase);

export default listProjectController;
