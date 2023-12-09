import PhotoRepository from '../../repositories/PhotoRepository';
import DeletePhotoByIdUseCase from './DeletePhotoByIdUseCase';
import DeletePhotoByIdController from './DeletePhotoByIdController';

const photoRepository = new PhotoRepository();
const deletePhotoByIdUseCase = new DeletePhotoByIdUseCase(photoRepository);
const deletePhotoByIdController = new DeletePhotoByIdController(
  deletePhotoByIdUseCase,
);

export default deletePhotoByIdController;
