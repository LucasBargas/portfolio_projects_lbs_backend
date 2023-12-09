import express, { Request, Response } from 'express';
import CheckToken from '../middlewares/CheckToken';
import imageUpload from '../middlewares/imageUpload';
import postPhotoController from '../modules/photos/useCases/PostPhoto';
import deletePhotoByIdController from '../modules/photos/useCases/DeletePhotoById';

const router = express.Router();

router.post(
  '/post',
  CheckToken.handleCheckToken,
  imageUpload.single('photo'),
  async (req: Request, res: Response) => {
    return await postPhotoController.handle(req, res);
  },
);

router.delete(
  '/:id',
  CheckToken.handleCheckToken,
  async (req: Request, res: Response) => {
    return await deletePhotoByIdController.handle(req, res);
  },
);

export default router;
