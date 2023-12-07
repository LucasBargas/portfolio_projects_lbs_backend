import express, { Request, Response } from 'express';
import createProjectController from '../modules/projects/useCases/CreateProject';
import CheckToken from '../middlewares/CheckToken';
import imageUpload from '../middlewares/imageUpload';

const router = express.Router();

router.post(
  '/create',
  CheckToken.handleCheckToken,
  imageUpload.array('photos'),
  async (req: Request, res: Response) => {
    return await createProjectController.handle(req, res);
  },
);

export default router;
