import mongoose from 'mongoose';
import { Request, Response } from 'express';
import DeleteProjectByIdUseCase from './DeleteProjectByIdUseCase';
import { Project } from '../../models/Project';

class DeleteProjectByIdController {
  constructor(private deleteProjectByIdUseCase: DeleteProjectByIdUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const objId = new mongoose.Types.ObjectId(id);
      const projectById = await Project.findById(objId);

      if (!projectById) {
        return res.status(422).json({
          errors: ['Nenhum projeto localizado ou ID inválido'],
        });
      }

      const project = await this.deleteProjectByIdUseCase.execute(id);

      return res.status(201).json({
        message: 'Projeto deletado',
        project,
      });
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default DeleteProjectByIdController;
