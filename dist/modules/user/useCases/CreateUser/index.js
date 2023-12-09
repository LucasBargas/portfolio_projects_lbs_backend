"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = __importDefault(require("../../repositories/UserRepository"));
const CreateUserUseCase_1 = __importDefault(require("./CreateUserUseCase"));
const CreateUserController_1 = __importDefault(require("./CreateUserController"));
const userRepository = new UserRepository_1.default();
const createUserUseCase = new CreateUserUseCase_1.default(userRepository);
const createUserController = new CreateUserController_1.default(createUserUseCase);
exports.default = createUserController;
