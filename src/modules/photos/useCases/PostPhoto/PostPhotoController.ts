import { Request, Response } from 'express';
import PostPhotoUseCase from './postPhotoUseCase';

class PostPhotoController {
  constructor(private postPhotoUseCase: PostPhotoUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { filename, destination } = req.file as Express.Multer.File;

      const newPhoto = {
        filename,
        destination: `${destination}${filename}`,
      };

      this.postPhotoUseCase.execute(newPhoto);

      return res.status(201).json({
        message: 'Foto adicionada.',
        photo: newPhoto,
      });
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default PostPhotoController;
