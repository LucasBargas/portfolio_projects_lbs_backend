import express, { Request, Response } from 'express';
import createUserController from '../modules/user/useCases/CreateUser';
import loginUserController from '../modules/user/useCases/LoginUser';
import Validate from '../middlewares/Validate';
import RegisterValidations from '../middlewares/RegisterValidations';
import LoginValidations from '../middlewares/LoginValidations';

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

export default router;
