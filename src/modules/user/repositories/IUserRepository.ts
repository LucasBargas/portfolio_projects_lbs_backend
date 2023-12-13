export interface IUserDTO {
  id?: string;
  email?: string;
  username: string;
  password?: string;
  fullName?: string;
  bio?: string;
  linkedin?: string;
  gitHub?: string;
  whatsapp?: string;
}

export interface IUserRepository {
  createUser: ({ email, username, password }: IUserDTO) => Promise<IUserDTO>;

  editUser: ({
    id,
    email,
    username,
    password,
    fullName,
    bio,
    linkedin,
    gitHub,
    whatsapp,
  }: IUserDTO) => Promise<IUserDTO>;

  loginUser: ({ username, password }: IUserDTO) => Promise<IUserDTO>;

  getUser: () => Promise<IUserDTO>;
}
