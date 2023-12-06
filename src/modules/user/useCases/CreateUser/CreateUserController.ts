import { Request, Response } from 'express';
import CreateUserUseCase from './CreateUserUseCase';
import EmailRegex from '../../../../helpers/EmailRegex';
import bcrypt from 'bcrypt';
import CreateUserToken from '../../../../helpers/CreateUserToken';

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

      if (!username) {
        return res
          .status(422)
          .json({ message: 'O nome de usuário é obrigatório.' });
      }

      if (!password) {
        return res.status(422).json({ message: 'A senha é obrigatória.' });
      }

      if (password && password.length < 6) {
        return res
          .status(422)
          .json({ message: 'A senha precisa ter no mímino 6 caracteres.' });
      }

      if (!confirmPassword) {
        return res
          .status(422)
          .json({ message: 'A confirmação de senha é obrigatória.' });
      }

      if (password !== confirmPassword) {
        return res.status(422).json({
          message: 'A senha e a confirmação de senha precisam ser iguais.',
        });
      }

      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = {
        email,
        username,
        password: passwordHash,
        confirmPassword,
      };

      const user = await this.createUserUseCase.execute(newUser);
      const token = await CreateUserToken.handleCreateUserToken(newUser);

      return res.status(201).json({ user, token });
    } catch (error) {
      return res
        .status(422)
        .json({ message: 'Houve um erro, tente novamente mais tarde!' });
    }
  }
}

export default CreateUserController;
