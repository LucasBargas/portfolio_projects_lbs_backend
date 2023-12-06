import { Request, Response } from 'express';
import CreateUserUseCase from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { email, username, password, confirmPassword } = req.body;

    try {
      const user = await this.createUserUseCase.execute({
        email,
        username,
        password,
        confirmPassword,
      });

      return res.status(201).json(user);
    } catch (error) {
      return res
        .status(422)
        .json({ message: 'Houve um erro, tente novamente mais tarde!' });
    }
  }
}

export default CreateUserController;
