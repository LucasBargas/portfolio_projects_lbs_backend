import mongoose from 'mongoose';
import { Request, Response } from 'express';
import EditUserUseCase from './EditUserUseCase';
import { User } from '../../models/User';

class EditUserController {
  constructor(private editUserUseCase: EditUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { email, username, fullName, bio, linkedin, github, whatsapp } =
      req.body;

    try {
      const objId = new mongoose.Types.ObjectId(id);
      const userById = await User.findById(objId);
      const emailAlreadyUsed = await User.findOne({ email });
      const usernameAlreadyUsed = await User.findOne({ username });

      if (email && email !== userById.email && emailAlreadyUsed) {
        return res.status(422).json({
          errors: [
            'Já existe um usuário com este e-mail! Por favor, defina outro',
          ],
        });
      }

      if (username && username !== userById.username && usernameAlreadyUsed) {
        return res.status(422).json({
          errors: [
            'Este nome de usuário já está em uso! Por favor, defina outro',
          ],
        });
      }

      const user = await this.editUserUseCase.execute({
        id,
        email,
        username,
        fullName,
        bio,
        linkedin,
        github,
        whatsapp,
      });

      return res.status(201).json({
        message: 'Usuário atualizado.',
        user,
      });
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default EditUserController;
