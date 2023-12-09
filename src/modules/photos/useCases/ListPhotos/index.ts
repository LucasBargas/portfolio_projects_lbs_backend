import PhotoRepository from '../../repositories/PhotoRepository';
import ListPhotosUseCase from './ListPhotosUseCase';
import ListPhotosController from './ListPhotosController';

const photoRepository = new PhotoRepository();
const listPhotosUseCase = new ListPhotosUseCase(photoRepository);
const listPhotosController = new ListPhotosController(listPhotosUseCase);

export default listPhotosController;
