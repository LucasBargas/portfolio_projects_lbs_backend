"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProjectsRepository_1 = __importDefault(require("../../repositories/ProjectsRepository"));
const DeleteProjectByIdUseCase_1 = __importDefault(require("./DeleteProjectByIdUseCase"));
const DeleteProjectByIdController_1 = __importDefault(require("./DeleteProjectByIdController"));
const projectsRepository = new ProjectsRepository_1.default();
const deleteProjectByIdUseCase = new DeleteProjectByIdUseCase_1.default(projectsRepository);
const deleteProjectByIdController = new DeleteProjectByIdController_1.default(deleteProjectByIdUseCase);
exports.default = deleteProjectByIdController;
