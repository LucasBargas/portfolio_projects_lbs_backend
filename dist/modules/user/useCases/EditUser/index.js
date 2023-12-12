"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = __importDefault(require("../../repositories/UserRepository"));
const EditUserUseCase_1 = __importDefault(require("./EditUserUseCase"));
const EditUserController_1 = __importDefault(require("./EditUserController"));
const userRepository = new UserRepository_1.default();
const editUserUseCase = new EditUserUseCase_1.default(userRepository);
const editUserController = new EditUserController_1.default(editUserUseCase);
exports.default = editUserController;
