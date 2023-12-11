import { Request, Response } from 'express';
import CreateCategoryUseCase from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response) {
    const { title } = req.body;
    try {
      const newCategory = {
        title,
      };

      this.createCategoryUseCase.execute(newCategory);

      return res.status(201).json({
        message: 'Categoria adicionada.',
        category: newCategory,
      });
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default CreateCategoryController;
