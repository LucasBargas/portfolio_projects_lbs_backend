"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhotoRepository_1 = __importDefault(require("../../repositories/PhotoRepository"));
const PostPhotoUseCase_1 = __importDefault(require("./PostPhotoUseCase"));
const PostPhotoController_1 = __importDefault(require("./PostPhotoController"));
const photoRepository = new PhotoRepository_1.default();
const postPhotoUseCase = new PostPhotoUseCase_1.default(photoRepository);
const postPhotoController = new PostPhotoController_1.default(postPhotoUseCase);
exports.default = postPhotoController;
