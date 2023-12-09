import mongoose from 'mongoose';
import { Request, Response } from 'express';
import UpdateProjectByIdUseCase from './UpdateProjectByIdUseCase';
import { Project } from '../../models/Project';
import { IProjectDTO } from '../../repositories/IProjectsRepository';

class UpdateProjectByIdController {
  constructor(private updateProjectByIdUseCase: UpdateProjectByIdUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { photos, title, description, appLink, gitHub, categories } =
      req.body;

    try {
      const objId = new mongoose.Types.ObjectId(id);
      const projectById = await Project.findById(objId);
      const titleAlreadyUsed = await Project.findOne({ title });

      if (title && title !== projectById.title && titleAlreadyUsed) {
        return res.status(422).json({
          errors: [
            'Já existe um projeto com este título! Por favor, defina outro',
          ],
        });
      }

      const projectUpdated: IProjectDTO = {
        id,
        photos,
        title,
        description,
        categories,
        appLink,
        gitHub,
      };

      this.updateProjectByIdUseCase.execute(projectUpdated);

      return res.status(201).json({
        message: 'Projeto atualizado.',
        project: { ...projectUpdated },
      });
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default UpdateProjectByIdController;
