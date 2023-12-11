import express, { Request, Response } from 'express';
import CheckToken from '../middlewares/CheckToken';
import createCategoryController from '../modules/categories/useCases/CreateCategory';
import deleteCategoryByIdController from '../modules/categories/useCases/DeleteCategory';
import listCategoriesController from '../modules/categories/useCases/ListCategories';

const router = express.Router();

router.post(
  '/create',
  CheckToken.handleCheckToken,
  async (req: Request, res: Response) => {
    return await createCategoryController.handle(req, res);
  },
);

router.delete(
  '/:id',
  CheckToken.handleCheckToken,
  async (req: Request, res: Response) => {
    return await deleteCategoryByIdController.handle(req, res);
  },
);

router.get('/', async (req: Request, res: Response) => {
  return await listCategoriesController.handle(req, res);
});

export default router;
