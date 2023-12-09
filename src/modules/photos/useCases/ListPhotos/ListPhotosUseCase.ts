import {
  IPhotoDTO,
  IPhotoRepository,
} from '../../repositories/IPhotoRepository';

class ListPhotosUseCase {
  constructor(private photoRepository: IPhotoRepository) {}

  async execute(): Promise<IPhotoDTO[]> {
    return await this.photoRepository.listPhotos();
  }
}

export default ListPhotosUseCase;
