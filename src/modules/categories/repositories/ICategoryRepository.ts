export interface ICategoryDTO {
  title: string;
}

export interface ICategoryRepository {
  createCategory: ({ title }: ICategoryDTO) => Promise<ICategoryDTO>;
  deleteCategory: (id: string) => Promise<ICategoryDTO>;
}
