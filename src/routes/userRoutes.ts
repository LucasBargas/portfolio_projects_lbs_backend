import express, { Request, Response } from 'express';
import createUserController from '../modules/user/useCases/CreateUser';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  return await createUserController.handle(req, res);
});

export default router;
