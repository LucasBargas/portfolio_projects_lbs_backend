import PhotoRepository from '../../repositories/PhotoRepository';
import PostPhotoUseCase from './PostPhotoUseCase';
import PostPhotoController from './PostPhotoController';

const photoRepository = new PhotoRepository();
const postPhotoUseCase = new PostPhotoUseCase(photoRepository);
const postPhotoController = new PostPhotoController(postPhotoUseCase);

export default postPhotoController;
