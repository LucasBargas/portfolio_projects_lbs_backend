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
const Photo_1 = require("../models/Photo");
const fs_1 = __importDefault(require("fs"));
class PhotoRepository {
    constructor() { }
    postPhoto({ filename, destination }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPhoto = { filename, destination };
            try {
                yield Photo_1.Photo.create(newPhoto);
                return newPhoto;
            }
            catch (error) {
                return error;
            }
        });
    }
    deletePhotoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objId = new mongoose_1.default.Types.ObjectId(id);
                const photo = yield Photo_1.Photo.findById(objId);
                fs_1.default.unlink(photo.destination, (err) => {
                    if (err)
                        throw err;
                });
                yield photo.deleteOne();
                return photo;
            }
            catch (error) {
                return error;
            }
        });
    }
    listPhotos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const photos = yield Photo_1.Photo.find().sort('-createdAt');
                return photos;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = PhotoRepository;
