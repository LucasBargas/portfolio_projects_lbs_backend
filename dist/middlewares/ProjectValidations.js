"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class ProjectValidations {
    static handleProjectValidations() {
        return [
            (0, express_validator_1.body)('photos').custom((value, { req }) => {
                if (!req.files) {
                    throw new Error('A imagem é obrigatória.');
                }
                return true;
            }),
            (0, express_validator_1.body)('title')
                .not()
                .equals('undefined')
                .withMessage('O título do projeto é obrigatório.')
                .isString()
                .withMessage('O título do projeto é obrigatório.')
                .isLength({ min: 3 })
                .withMessage('O título do projeto precisa ter no mínimo 3 caracteres'),
            (0, express_validator_1.body)('description')
                .not()
                .equals('undefined')
                .withMessage('A descrição do projeto é obrigatório.')
                .isString()
                .withMessage('A descrição do projeto é obrigatório.')
                .isLength({ min: 10 })
                .withMessage('A descrição do projeto precisa ter no mínimo 10 caracteres'),
            (0, express_validator_1.body)('appLink')
                .not()
                .equals('undefined')
                .withMessage('O link do projeto é obrigatório')
                .isString()
                .withMessage('O link do projeto é obrigatório'),
            (0, express_validator_1.body)('gitHub')
                .not()
                .equals('undefined')
                .withMessage('O link do repositório no Github do projeto é obrigatório')
                .isString()
                .withMessage('O link do repositório no Github do projeto é obrigatório'),
            (0, express_validator_1.body)('categories')
                .not()
                .equals('undefined')
                .isArray()
                .withMessage('É preciso definir as categorias do projeto')
                .isLength({ min: 1 })
                .withMessage('É preciso definir pelo menos uma categoria para o projeto'),
        ];
    }
}
exports.default = ProjectValidations;
