"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhotoRepository_1 = __importDefault(require("../../repositories/PhotoRepository"));
const ListPhotosUseCase_1 = __importDefault(require("./ListPhotosUseCase"));
const ListPhotosController_1 = __importDefault(require("./ListPhotosController"));
const photoRepository = new PhotoRepository_1.default();
const listPhotosUseCase = new ListPhotosUseCase_1.default(photoRepository);
const listPhotosController = new ListPhotosController_1.default(listPhotosUseCase);
exports.default = listPhotosController;
