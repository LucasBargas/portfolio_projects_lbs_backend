import mongoose from 'mongoose';
import { Request, Response } from 'express';
import DeleteCategoryUseCase from './DeleteCategoryByIdUseCase';
import { Category } from '../../models/Category';

class DeleteCategoryByIdController {
  constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const objId = new mongoose.Types.ObjectId(id);
      const categoryById = await Category.findById(objId);

      if (!categoryById) {
        return res.status(422).json({
          errors: ['Nenhuma categoria localizada ou ID inválido.'],
        });
      }

      const category = await this.deleteCategoryUseCase.execute(id);

      return res.status(201).json({
        message: 'Categoria deletada',
        category,
      });
    } catch (error) {
      return res
        .status(422)
        .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
    }
  }
}

export default DeleteCategoryByIdController;
