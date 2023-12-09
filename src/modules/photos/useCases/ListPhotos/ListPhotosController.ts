import { Request, Response } from 'express';
import ListPhotosUseCase from './ListPhotosUseCase';

class ListPhotosController {
  constructor(private listPhotosUseCase: ListPhotosUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const photos = await this.listPhotosUseCase.execute();

      if (!photos || photos.length === 0) {
        return res.status(422).json({
          total: photos.length,
          errors: ['Ainda não foram adicionadas fotos.'],
        });
      }

      return res.status(201).json({
        total: photos.length,
        photos,
      });
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default ListPhotosController;
