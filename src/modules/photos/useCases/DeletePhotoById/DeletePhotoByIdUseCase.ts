import {
  IPhotoRepository,
  IPhotoDTO,
} from '../../repositories/IPhotoRepository';

class DeletePhotoByIdUseCase {
  constructor(private photoRepository: IPhotoRepository) {}

  async execute(id: string): Promise<IPhotoDTO> {
    return await this.photoRepository.deletePhotoById(id);
  }
}

export default DeletePhotoByIdUseCase;
