import UserRepository from '../../repositories/UserRepository';
import GetUserUseCase from './GetUserUseCase';
import GetUserController from './GetUserController';

const userRepository = new UserRepository();
const getUserUseCase = new GetUserUseCase(userRepository);
const getUserController = new GetUserController(getUserUseCase);

export default getUserController;
