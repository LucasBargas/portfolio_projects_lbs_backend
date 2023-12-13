import { Request, Response } from 'express';
import CreateProjectUseCase from './CreateProjectUseCase';
import { Project } from '../../models/Project';
import { IProjectDTO } from '../../repositories/IProjectsRepository';

class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) {}

  async handle(req: Request, res: Response) {
    const {
      photos,
      title,
      description,
      appLink,
      frontEndRepo,
      backEndRepo,
      categories,
    } = req.body;
    const trash = false;

    try {
      const titleAlreadyUsed = await Project.findOne({ title });

      if (titleAlreadyUsed) {
        return res.status(422).json({
          errors: [
            'Já existe um projeto com este título! Por favor, defina outro',
          ],
        });
      }

      const newProject: IProjectDTO = {
        photos,
        title,
        description,
        categories,
        appLink,
        frontEndRepo,
        backEndRepo,
        trash,
      };

      this.createProjectUseCase.execute(newProject);

      return res.status(201).json({
        message: 'Projeto adicionado',
        newProject,
      });
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default CreateProjectController;
