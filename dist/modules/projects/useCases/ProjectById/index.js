"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProjectsRepository_1 = __importDefault(require("../../repositories/ProjectsRepository"));
const ProjectByIdUseCase_1 = __importDefault(require("./ProjectByIdUseCase"));
const ProjectByIdController_1 = __importDefault(require("./ProjectByIdController"));
const projectsRepository = new ProjectsRepository_1.default();
const projectByIdUseCase = new ProjectByIdUseCase_1.default(projectsRepository);
const projectByIdController = new ProjectByIdController_1.default(projectByIdUseCase);
exports.default = projectByIdController;
