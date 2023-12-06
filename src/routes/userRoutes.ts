import express, { Request, Response } from 'express';
import createUserController from '../modules/user/useCases/CreateUser';
import Validate from '../middlewares/Validate';
import RegisterValidations from '../middlewares/RegisterValidations';

const router = express.Router();

router.post(
  '/register',
  RegisterValidations.handleRegisterValidations(),
  Validate.handleValidate,
  async (req: Request, res: Response) => {
    return await createUserController.handle(req, res);
  },
);

export default router;
