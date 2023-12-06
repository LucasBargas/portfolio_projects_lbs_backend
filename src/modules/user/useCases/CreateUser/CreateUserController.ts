import { Request, Response } from 'express';
import CreateUserUseCase from './CreateUserUseCase';
// import EmailRegex from '../../../../helpers/EmailRegex';
import bcrypt from 'bcrypt';
import CreateUserToken from '../../../../helpers/CreateUserToken';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { email, username, password } = req.body;

    try {
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      const user = await this.createUserUseCase.execute({
        email,
        username,
        password: passwordHash,
      });

      const token = await CreateUserToken.handleCreateUserToken(user);

      return res.status(201).json({ user, token });
    } catch (error) {
      return res
        .status(422)
        .json({ message: 'Houve um erro, tente novamente mais tarde!' });
    }
  }
}

export default CreateUserController;
