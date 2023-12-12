import { Request, Response } from 'express';
import CreateUserUseCase from './CreateUserUseCase';
import bcrypt from 'bcrypt';
import CreateUserToken from '../../../../helpers/CreateUserToken';
import { User } from '../../models/User';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { email, username, password } = req.body;

    try {
      const emailAlreadyUsed = await User.findOne({ email });
      const usernameAlreadyUsed = await User.findOne({ username });

      if (emailAlreadyUsed) {
        return res.status(422).json({
          errors: ['E-mail já cadastrado! Por favor, defina outro'],
        });
      }

      if (usernameAlreadyUsed) {
        return res.status(422).json({
          errors: ['Nome de usuário já cadastrado! Por favor, defina outro'],
        });
      }

      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      const user = await this.createUserUseCase.execute({
        email,
        username,
        password: passwordHash,
      });

      const token = await CreateUserToken.handleCreateUserToken(user);

      return res
        .status(201)
        .json({ user, token, message: 'Você está autenticado.' });
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default CreateUserController;
