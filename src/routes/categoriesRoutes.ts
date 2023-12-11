import express, { Request, Response } from 'express';
import CheckToken from '../middlewares/CheckToken';
import createCategoryController from '../modules/categories/useCases/CreateCategory';

const router = express.Router();

router.post(
  '/create',
  CheckToken.handleCheckToken,
  async (req: Request, res: Response) => {
    return await createCategoryController.handle(req, res);
  },
);

export default router;
