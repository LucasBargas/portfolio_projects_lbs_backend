import mongoose from 'mongoose';
import { Request, Response } from 'express';
import DeletePhotoByIdUseCase from './DeletePhotoByIdUseCase';
import { Photo } from '../../models/Photo';

class DeletePhotoByIdController {
  constructor(private deletePhotoByIdUseCase: DeletePhotoByIdUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const objId = new mongoose.Types.ObjectId(id);
      const photoById = await Photo.findById(objId);

      if (!photoById) {
        return res.status(422).json({
          errors: ['Nenhuma foto localizada ou ID inválido.'],
        });
      }

      const photo = await this.deletePhotoByIdUseCase.execute(id);

      return res.status(201).json({
        message: 'Foto deletada',
        photo,
      });
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default DeletePhotoByIdController;
