import UserRepository from '../../repositories/UserRepository';
import EditUserUseCase from './EditUserUseCase';
import EditUserController from './EditUserController';

const userRepository = new UserRepository();
const editUserUseCase = new EditUserUseCase(userRepository);
const editUserController = new EditUserController(editUserUseCase);

export default editUserController;
