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
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = require("../../models/Project");
class CreateProjectController {
    constructor(createProjectUseCase) {
        this.createProjectUseCase = createProjectUseCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, appLink, gitHub, categories } = req.body;
            const trash = false;
            try {
                const photos = req.files;
                const titleAlreadyUsed = yield Project_1.Project.findOne({ title });
                if (titleAlreadyUsed) {
                    return res.status(422).json({
                        errors: [
                            'Já existe um projeto com este título! Por favor, defina outro',
                        ],
                    });
                }
                const newProject = {
                    photos: [],
                    title,
                    description,
                    categories,
                    appLink,
                    gitHub,
                    trash,
                };
                photos.forEach((photo) => newProject.photos.push({
                    filename: photo.filename,
                    destination: `/uploads/thumbs/${photo.filename}`,
                }));
                this.createProjectUseCase.execute(newProject);
                return res.status(201).json({
                    message: 'Projeto adicionado',
                    newProject,
                });
            }
            catch (error) {
                return res.status(422).json({ errors: error });
            }
        });
    }
}
exports.default = CreateProjectController;
