import express, { Request, Response } from 'express';
import createProjectController from '../modules/projects/useCases/CreateProject';
import CheckToken from '../middlewares/CheckToken';
import Validate from '../middlewares/Validate';
import ProjectValidations from '../middlewares/ProjectValidations';
import imageUpload from '../middlewares/imageUpload';

const router = express.Router();

router.post(
  '/create',
  CheckToken.handleCheckToken,
  ProjectValidations.handleProjectValidations(),
  Validate.handleValidate,
  imageUpload.array('photos'),
  async (req: Request, res: Response) => {
    return await createProjectController.handle(req, res);
  },
);

export default router;
