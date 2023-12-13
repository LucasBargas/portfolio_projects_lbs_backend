import express, { Request, Response } from 'express';
import CheckToken from '../middlewares/CheckToken';
import createUserController from '../modules/user/useCases/CreateUser';
import loginUserController from '../modules/user/useCases/LoginUser';
import Validate from '../middlewares/Validate';
import RegisterValidations from '../middlewares/RegisterValidations';
import LoginValidations from '../middlewares/LoginValidations';
import editUserController from '../modules/user/useCases/EditUser';
import EditUserValidations from '../middlewares/EditUserValidations';
import getUserController from '../modules/user/useCases/GetUser';

const router = express.Router();

router.post(
  '/register',
  RegisterValidations.handleRegisterValidations(),
  Validate.handleValidate,
  async (req: Request, res: Response) => {
    return await createUserController.handle(req, res);
  },
);

router.post(
  '/login',
  LoginValidations.handleLoginValidations(),
  Validate.handleValidate,
  async (req: Request, res: Response) => {
    return await loginUserController.handle(req, res);
  },
);

router.patch(
  '/:id',
  CheckToken.handleCheckToken,
  EditUserValidations.handleEditUserValidations(),
  Validate.handleValidate,
  async (req: Request, res: Response) => {
    return await editUserController.handle(req, res);
  },
);

router.get('/', async (req: Request, res: Response) => {
  return await getUserController.handle(req, res);
});

export default router;
