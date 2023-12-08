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
const bcrypt_1 = __importDefault(require("bcrypt"));
const CreateUserToken_1 = __importDefault(require("../../../../helpers/CreateUserToken"));
const User_1 = require("../../models/User");
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            try {
                const usernameAlreadyUsed = yield User_1.User.findOne({ username });
                if (usernameAlreadyUsed) {
                    return res.status(422).json({
                        errors: ['Nome de usuário já cadastrado! Por favor, defina outro'],
                    });
                }
                const salt = yield bcrypt_1.default.genSalt(12);
                const passwordHash = yield bcrypt_1.default.hash(password, salt);
                const user = yield this.createUserUseCase.execute({
                    username,
                    password: passwordHash,
                });
                const token = yield CreateUserToken_1.default.handleCreateUserToken(user);
                return res
                    .status(201)
                    .json({ user, token, message: 'Você está autenticado.' });
            }
            catch (error) {
                return res
                    .status(422)
                    .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
            }
        });
    }
}
exports.default = CreateUserController;
