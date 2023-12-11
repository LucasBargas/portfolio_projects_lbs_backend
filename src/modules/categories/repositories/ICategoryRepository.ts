export interface ICategoryDTO {
  title: string;
}

export interface ICategoryRepository {
  createCategory: ({ title }: ICategoryDTO) => Promise<ICategoryDTO>;
  deleteCategoryById: (id: string) => Promise<ICategoryDTO>;
  listCategories: () => Promise<ICategoryDTO[]>;
}
