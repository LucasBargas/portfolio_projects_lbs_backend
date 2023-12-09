"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Project_1 = require("../models/Project");
class ProjectsRepository {
    constructor() { }
    createProject({ photos, title, description, categories, appLink, gitHub, trash, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProject = {
                    photos,
                    title,
                    description,
                    categories,
                    appLink,
                    gitHub,
                    trash,
                };
                yield Project_1.Project.create(newProject);
                return newProject;
            }
            catch (error) {
                return error;
            }
        });
    }
    updateProjectById({ id, photos, title, description, categories, appLink, gitHub, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objId = new mongoose_1.default.Types.ObjectId(id);
                const project = yield Project_1.Project.findById(objId);
                project.photos = photos;
                project.title = title;
                project.description = description;
                project.categories = categories;
                project.appLink = appLink;
                project.gitHub = gitHub;
                yield project.save();
                return project;
            }
            catch (error) {
                return error;
            }
        });
    }
    listProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield Project_1.Project.find({ trash: false }).sort('-createdAt');
                return projects;
            }
            catch (error) {
                return error;
            }
        });
    }
    listProjectsInTrash() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield Project_1.Project.find({ trash: true }).sort('-createdAt');
                return projects;
            }
            catch (error) {
                return error;
            }
        });
    }
    projectById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objId = new mongoose_1.default.Types.ObjectId(id);
                const project = yield Project_1.Project.findById(objId);
                return project;
            }
            catch (error) {
                return error;
            }
        });
    }
    projectInTrashById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objId = new mongoose_1.default.Types.ObjectId(id);
                const project = yield Project_1.Project.findById(objId);
                project.trash = project.trash ? false : true;
                yield project.save();
                return project;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = ProjectsRepository;
