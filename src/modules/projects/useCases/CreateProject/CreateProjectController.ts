import { Request, Response } from 'express';
import CreateProjectUseCase from './CreateProjectUseCase';
import { Project } from '../../models/Project';

class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) {}

  async handle(req: Request, res: Response) {
    const { title, description, appLink, gitHub, categories } = req.body;
    const recycling = false;

    try {
      const photos = req.files as Express.Multer.File[];
      const titleAlreadyUsed = await Project.findOne({ title });

      if (titleAlreadyUsed) {
        return res.status(422).json({
          errors: [
            'Já existe um projeto com este título! Por favor, defina outro',
          ],
        });
      }

      const newProject = {
        photos: [],
        title,
        description,
        categories,
        appLink,
        gitHub,
        recycling,
      };

      photos.forEach((photo) =>
        newProject.photos.push({
          filename: photo.filename,
          destination: `/uploads/thumbs/${photo.filename}`,
        }),
      );

      this.createProjectUseCase.execute(newProject);

      return res.status(201).json({
        message: 'Projeto adicionado',
        newProject,
      });
    } catch (error) {
      return res.status(422).json({ errors: error });
    }
  }
}

export default CreateProjectController;
