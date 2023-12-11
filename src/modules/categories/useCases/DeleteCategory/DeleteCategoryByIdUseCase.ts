import {
  ICategoryRepository,
  ICategoryDTO,
} from '../../repositories/ICategoryRepository';

class DeleteCategoryByIdUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: string): Promise<ICategoryDTO> {
    return await this.categoryRepository.deleteCategoryById(id);
  }
}

export default DeleteCategoryByIdUseCase;
