import mongoose from 'mongoose';
import { IPhotoRepository, IPhotoDTO } from './IPhotoRepository';
import { Photo } from '../models/Photo';
import fs from 'fs';

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

  async deletePhotoById(id: string): Promise<IPhotoDTO> {
    try {
      const objId = new mongoose.Types.ObjectId(id);
      const photo = await Photo.findById(objId);

      fs.unlink(photo.destination, (err) => {
        if (err) throw err;
      });

      await Photo.findByIdAndDelete(objId);
      return photo;
    } catch (error) {
      return error;
    }
  }
}

export default PhotoRepository;
