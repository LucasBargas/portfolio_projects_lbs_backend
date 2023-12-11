import {
  ICategoryRepository,
  ICategoryDTO,
} from '../../repositories/ICategoryRepository';

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ title }: ICategoryDTO): Promise<ICategoryDTO> {
    return await this.categoryRepository.createCategory({ title });
  }
}

export default CreateCategoryUseCase;
