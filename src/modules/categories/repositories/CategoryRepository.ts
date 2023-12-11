import mongoose from 'mongoose';
import { ICategoryRepository, ICategoryDTO } from './ICategoryRepository';
import { Category } from '../models/Category';

class CategoryRepository implements ICategoryRepository {
  constructor() {}

  async createCategory({ title }: ICategoryDTO): Promise<ICategoryDTO> {
    try {
      const newCategory = { title };

      await Category.create(newCategory);
      return newCategory;
    } catch (error) {
      return error;
    }
  }

  async deleteCategoryById(id: string): Promise<ICategoryDTO> {
    try {
      const objId = new mongoose.Types.ObjectId(id);
      const category = await Category.findById(objId);

      await category.deleteOne();
      return category;
    } catch (error) {
      return error;
    }
  }

  async listCategories(): Promise<ICategoryDTO[]> {
    try {
      const categories = await Category.find().sort('-createdAt');
      return categories;
    } catch (error) {
      return error;
    }
  }
}

export default CategoryRepository;
