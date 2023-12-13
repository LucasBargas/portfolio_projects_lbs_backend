import { Request, Response } from 'express';
import GetUserUseCase from './GetUserUseCase';

class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const user = await this.getUserUseCase.execute();

      return res.status(201).json(user);
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default GetUserController;
