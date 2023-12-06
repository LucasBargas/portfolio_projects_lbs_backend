import { Request, Response } from 'express';
import CreateUserUseCase from './CreateUserUseCase';
import EmailRegex from '../../../../helpers/EmailRegex';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { email, username, password, confirmPassword } = req.body;

    try {
      if (!email) {
        return res.status(422).json({ message: 'O e-mail é obrigatório.' });
      }

      if (!EmailRegex.handleEmailRegex(email)) {
        return res
          .status(422)
          .json({ message: 'Insira, por favor, um e-mail válido.' });
      }

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
