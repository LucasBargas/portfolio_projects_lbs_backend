export interface IPhotoDTO {
  filename: string;
  destination: string;
}

export interface IPhotoRepository {
  postPhoto: ({ filename, destination }: IPhotoDTO) => Promise<IPhotoDTO>;
}
