// import mongoose from 'mongoose';
import { IPhotoRepository, IPhotoDTO } from './IPhotoRepository';
import { Photo } from '../models/Photo';

class PhotoRepository implements IPhotoRepository {
  constructor() {}

  async postPhoto({ filename, destination }: IPhotoDTO): Promise<IPhotoDTO> {
    const newPhoto = { filename, destination };

    try {
      await Photo.create(newPhoto);
      return newPhoto;
    } catch (error) {
      return error;
    }
  }
}

export default PhotoRepository;
