import { Request, Response } from 'express';
import ListCategoriesUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const categories = await this.listCategoriesUseCase.execute();

      if (!categories || categories.length === 0) {
        return res.status(422).json({
          total: categories.length,
          errors: ['Ainda não foram adicionadas categorias.'],
        });
      }

      return res.status(201).json({
        total: categories.length,
        categories,
      });
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default ListCategoriesController;
