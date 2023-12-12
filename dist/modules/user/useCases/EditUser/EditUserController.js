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
const User_1 = require("../../models/User");
class EditUserController {
    constructor(editUserUseCase) {
        this.editUserUseCase = editUserUseCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { email, username, fullName, bio, linkedin, github, whatsapp } = req.body;
            try {
                const objId = new mongoose_1.default.Types.ObjectId(id);
                const userById = yield User_1.User.findById(objId);
                const emailAlreadyUsed = yield User_1.User.findOne({ email });
                const usernameAlreadyUsed = yield User_1.User.findOne({ username });
                if (email && email !== userById.email && emailAlreadyUsed) {
                    return res.status(422).json({
                        errors: [
                            'Já existe um usuário com este e-mail! Por favor, defina outro',
                        ],
                    });
                }
                if (username && username !== userById.username && usernameAlreadyUsed) {
                    return res.status(422).json({
                        errors: [
                            'Este nome de usuário já está em uso! Por favor, defina outro',
                        ],
                    });
                }
                const user = yield this.editUserUseCase.execute({
                    id,
                    email,
                    username,
                    fullName,
                    bio,
                    linkedin,
                    github,
                    whatsapp,
                });
                return res.status(201).json({
                    message: 'Usuário atualizado.',
                    user,
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
exports.default = EditUserController;
