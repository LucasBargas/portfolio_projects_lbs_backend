"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProjectsRepository_1 = __importDefault(require("../../repositories/ProjectsRepository"));
const CreateProjectUseCase_1 = __importDefault(require("./CreateProjectUseCase"));
const CreateProjectController_1 = __importDefault(require("./CreateProjectController"));
const projectsRepository = new ProjectsRepository_1.default();
const createProjectUseCase = new CreateProjectUseCase_1.default(projectsRepository);
const createProjectController = new CreateProjectController_1.default(createProjectUseCase);
exports.default = createProjectController;
