"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = __importDefault(require("../../repositories/UserRepository"));
const LoginUserUseCase_1 = __importDefault(require("./LoginUserUseCase"));
const LoginUserController_1 = __importDefault(require("./LoginUserController"));
const userRepository = new UserRepository_1.default();
const loginUserUseCase = new LoginUserUseCase_1.default(userRepository);
const loginUserController = new LoginUserController_1.default(loginUserUseCase);
exports.default = loginUserController;
