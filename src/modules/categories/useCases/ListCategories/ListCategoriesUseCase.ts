import {
  ICategoryRepository,
  ICategoryDTO,
} from '../../repositories/ICategoryRepository';

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(): Promise<ICategoryDTO[]> {
    return await this.categoryRepository.listCategories();
  }
}

export default ListCategoriesUseCase;
