"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProjectsRepository_1 = __importDefault(require("../../repositories/ProjectsRepository"));
const ListProjectsInTrashtUseCase_1 = __importDefault(require("./ListProjectsInTrashtUseCase"));
const ListProjectsInTrashController_1 = __importDefault(require("./ListProjectsInTrashController"));
const projectsRepository = new ProjectsRepository_1.default();
const listProjectInTrashUseCase = new ListProjectsInTrashtUseCase_1.default(projectsRepository);
const listProjectInTrashController = new ListProjectsInTrashController_1.default(listProjectInTrashUseCase);
exports.default = listProjectInTrashController;
