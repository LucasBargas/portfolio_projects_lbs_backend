import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { Project } from '../../models/Project';
import ProjectByIdUseCase from './ProjectByIdUseCase';

class ProjectByIdController {
  constructor(private projectByIdUseCase: ProjectByIdUseCase) {}

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

      const project = await this.projectByIdUseCase.execute(String(id));
      return res.status(201).json(project);
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default ProjectByIdController;
