import { Request, Response } from 'express';
import LoginUserUseCase from './LoginUserUseCase';
import bcrypt from 'bcrypt';
import CreateUserToken from '../../../../helpers/CreateUserToken';
import { User } from '../../models/User';

class CreateUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(422).json({
          errors: ['Não há usuário cadastrado com este nome de usuário'],
        });
      }

      // Check if password match with db password
      const checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) {
        return res.status(422).json({
          errors: ['A senha inserida é inválida.'],
        });
      }

      await this.loginUserUseCase.execute(user);
      const token = await CreateUserToken.handleCreateUserToken(user);

      return res.status(201).json({ token, message: 'Você está autenticado.' });
    } catch (error) {
      return res
        .status(422)
        .json({ message: 'Houve um erro, tente novamente mais tarde!' });
    }
  }
}

export default CreateUserController;
