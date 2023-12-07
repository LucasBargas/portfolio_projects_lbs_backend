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
    constructor(loginUserUseCase) {
        this.loginUserUseCase = loginUserUseCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            try {
                const user = yield User_1.User.findOne({ username });
                if (!user) {
                    return res.status(422).json({
                        errors: ['Não há usuário cadastrado com este nome de usuário'],
                    });
                }
                // Check if password match with db password
                const checkPassword = yield bcrypt_1.default.compare(password, user.password);
                if (!checkPassword) {
                    return res.status(422).json({
                        errors: ['A senha inserida é inválida.'],
                    });
                }
                yield this.loginUserUseCase.execute(user);
                const token = yield CreateUserToken_1.default.handleCreateUserToken(user);
                return res
                    .status(201)
                    .json({ user, token, message: 'Você está autenticado.' });
            }
            catch (error) {
                return res
                    .status(422)
                    .json({ message: 'Houve um erro, tente novamente mais tarde!' });
            }
        });
    }
}
exports.default = CreateUserController;
