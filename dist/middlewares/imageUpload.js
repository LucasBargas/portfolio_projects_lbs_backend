"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const imageStorage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'src/uploads/thumbs/');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() +
            String(Math.floor(Math.random() * 1000)) +
            path_1.default.extname(file.originalname));
    },
});
const imageUpload = (0, multer_1.default)({
    storage: imageStorage,
    fileFilter(req, file, callback) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|webp)$/)) {
            return callback(new Error('Por favor, envie apenas fotos png, jpg ou webp.'));
        }
        callback(undefined, true);
    },
});
exports.default = imageUpload;
