import CategoryRepository from '../../repositories/CategoryRepository';
import DeleteCategoryByIdUseCase from './DeleteCategoryByIdUseCase';
import DeleteCategoryByIdController from './DeleteCategoryByIdController';

const categoryRepository = new CategoryRepository();
const deleteCategoryByIdUseCase = new DeleteCategoryByIdUseCase(
  categoryRepository,
);
const deleteCategoryByIdController = new DeleteCategoryByIdController(
  deleteCategoryByIdUseCase,
);

export default deleteCategoryByIdController;
