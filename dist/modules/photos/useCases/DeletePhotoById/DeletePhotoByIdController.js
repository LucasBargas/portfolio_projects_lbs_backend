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
const Photo_1 = require("../../models/Photo");
class DeletePhotoByIdController {
    constructor(deletePhotoByIdUseCase) {
        this.deletePhotoByIdUseCase = deletePhotoByIdUseCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const objId = new mongoose_1.default.Types.ObjectId(id);
                const photoById = yield Photo_1.Photo.findById(objId);
                if (!photoById) {
                    return res.status(422).json({
                        errors: ['Nenhuma foto localizada ou ID inválido.'],
                    });
                }
                const photo = yield this.deletePhotoByIdUseCase.execute(id);
                return res.status(201).json({
                    message: 'Foto deletada',
                    photo,
                });
            }
            catch (error) {
                return res
                    .status(422)
                    .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
            }
        });
    }
}
exports.default = DeletePhotoByIdController;
