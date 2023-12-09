import {
  IPhotoDTO,
  IPhotoRepository,
} from '../../repositories/IPhotoRepository';

class PostPhotoUseCase {
  constructor(private photoRepository: IPhotoRepository) {}

  async execute({ filename, destination }: IPhotoDTO) {
    return await this.photoRepository.postPhoto({ filename, destination });
  }
}

export default PostPhotoUseCase;
