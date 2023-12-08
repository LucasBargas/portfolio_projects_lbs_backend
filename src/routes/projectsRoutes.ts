import express, { Request, Response } from 'express';
import createProjectController from '../modules/projects/useCases/CreateProject';
import CheckToken from '../middlewares/CheckToken';
// import Validate from '../middlewares/Validate';
// import ProjectValidations from '../middlewares/ProjectValidations';
import imageUpload from '../middlewares/imageUpload';
import listProjectController from '../modules/projects/useCases/ListProjects';
import projectInTrashByIdController from '../modules/projects/useCases/ProjectInTrashById';

const router = express.Router();

router.post(
  '/create',
  CheckToken.handleCheckToken,
  // ProjectValidations.handleProjectValidations(),
  // Validate.handleValidate,
  imageUpload.array('photos'),
  async (req: Request, res: Response) => {
    return await createProjectController.handle(req, res);
  },
);

router.patch('/trash/:id', async (req: Request, res: Response) => {
  return await projectInTrashByIdController.handle(req, res);
});

router.get('/', async (req: Request, res: Response) => {
  return await listProjectController.handle(req, res);
});

export default router;
