"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProjectsRepository_1 = __importDefault(require("../../repositories/ProjectsRepository"));
const ProjectInTrashByIdUseCase_1 = __importDefault(require("./ProjectInTrashByIdUseCase"));
const ProjectInTrashByIdController_1 = __importDefault(require("./ProjectInTrashByIdController"));
const projectsRepository = new ProjectsRepository_1.default();
const projectInTrashByIdUseCase = new ProjectInTrashByIdUseCase_1.default(projectsRepository);
const projectInTrashByIdController = new ProjectInTrashByIdController_1.default(projectInTrashByIdUseCase);
exports.default = projectInTrashByIdController;
