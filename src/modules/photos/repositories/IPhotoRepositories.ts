export interface IPhotoDTO {
  filename: string;
  destination: string;
}

export interface IProjectRepository {
  createCategory: ({ filename, destination }: IPhotoDTO) => Promise<IPhotoDTO>;
}
