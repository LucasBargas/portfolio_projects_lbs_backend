"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class LoginValidations {
    static handleLoginValidations() {
        return [
            (0, express_validator_1.body)('username')
                .isString()
                .withMessage('O nome de usuário é obrigatório.')
                .isLength({ min: 3 })
                .withMessage('O nome de usuário precisa ter no mínimo 3 caracteres')
                .custom((value) => {
                if (value.includes('.com')) {
                    throw new Error('O nome de usuário de usuário não pode incluir ".com"');
                }
                if (value.includes('-')) {
                    throw new Error('O nome de usuário de usuário não pode incluir hífens(-), somente sublinhado(_)');
                }
                if (/[A-Z]/.test(value)) {
                    throw new Error('O nome de usuário de usuário não pode conter letras maiúsculas, por favor, use somente minúsculas');
                }
                if (/\s/g.test(value)) {
                    throw new Error('O nome de usuário de usuário não pode conter espaços');
                }
                return true;
            }),
            (0, express_validator_1.body)('password')
                .isString()
                .withMessage('A senha é obrigatória')
                .isLength({ min: 6 })
                .withMessage('A senha precisa ter no mínimo 6 caracteres'),
        ];
    }
}
exports.default = LoginValidations;
