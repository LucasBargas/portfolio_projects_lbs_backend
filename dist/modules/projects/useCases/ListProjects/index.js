"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProjectsRepository_1 = __importDefault(require("../../repositories/ProjectsRepository"));
const ListProjectUseCase_1 = __importDefault(require("./ListProjectUseCase"));
const ListProjectController_1 = __importDefault(require("./ListProjectController"));
const projectsRepository = new ProjectsRepository_1.default();
const listProjectUseCase = new ListProjectUseCase_1.default(projectsRepository);
const listProjectController = new ListProjectController_1.default(listProjectUseCase);
exports.default = listProjectController;
