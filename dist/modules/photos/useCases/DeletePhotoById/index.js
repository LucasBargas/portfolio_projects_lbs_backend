"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhotoRepository_1 = __importDefault(require("../../repositories/PhotoRepository"));
const DeletePhotoByIdUseCase_1 = __importDefault(require("./DeletePhotoByIdUseCase"));
const DeletePhotoByIdController_1 = __importDefault(require("./DeletePhotoByIdController"));
const photoRepository = new PhotoRepository_1.default();
const deletePhotoByIdUseCase = new DeletePhotoByIdUseCase_1.default(photoRepository);
const deletePhotoByIdController = new DeletePhotoByIdController_1.default(deletePhotoByIdUseCase);
exports.default = deletePhotoByIdController;
