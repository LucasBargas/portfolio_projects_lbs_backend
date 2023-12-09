"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProjectsRepository_1 = __importDefault(require("../../repositories/ProjectsRepository"));
const UpdateProjectByIdUseCase_1 = __importDefault(require("./UpdateProjectByIdUseCase"));
const UpdateProjectByIdController_1 = __importDefault(require("./UpdateProjectByIdController"));
const projectsRepository = new ProjectsRepository_1.default();
const updateProjectByIdUseCase = new UpdateProjectByIdUseCase_1.default(projectsRepository);
const updateProjectByIdController = new UpdateProjectByIdController_1.default(updateProjectByIdUseCase);
exports.default = updateProjectByIdController;
