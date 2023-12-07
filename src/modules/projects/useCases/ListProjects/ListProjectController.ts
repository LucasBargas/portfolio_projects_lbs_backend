import { Request, Response } from 'express';
import ListProjectUseCase from './ListProjectUseCase';

class ListProjectController {
  constructor(private listProjectUseCase: ListProjectUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const projects = await this.listProjectUseCase.execute();

      if (!projects || projects.length === 0) {
        return res.status(422).json({
          errors: ['Ainda não foram adicionados projetos'],
        });
      }

      return res
        .status(201)
        .json(projects.filter((project) => !project.trash && project));
    } catch (error) {
      return res.status(422).json({
        errors: [error],
      });
    }
  }
}

export default ListProjectController;
