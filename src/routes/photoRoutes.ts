import express, { Request, Response } from 'express';
import CheckToken from '../middlewares/CheckToken';
import imageUpload from '../middlewares/imageUpload';
import postPhotoController from '../modules/photos/useCases/PostPhoto';

const router = express.Router();

router.post(
  '/post',
  CheckToken.handleCheckToken,
  // ProjectValidations.handleProjectValidations(),
  // Validate.handleValidate,
  imageUpload.single('photo'),
  async (req: Request, res: Response) => {
    return await postPhotoController.handle(req, res);
  },
);

export default router;
