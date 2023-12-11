"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class ProjectValidations {
    static handleProjectValidations() {
        return [
            (0, express_validator_1.body)('photos')
                .isArray()
                .withMessage('As fotos do projeto precisam ser definidas')
                .isLength({ min: 2 })
                .withMessage('O projeto deve ter pelo menos 2 fotos')
                .custom((value, { req }) => {
                if (req.body.photos.length < 2) {
                    throw new Error('O projeto deve ter pelo menos 2 fotos');
                }
                return true;
            }),
            (0, express_validator_1.body)('title')
                .isString()
                .withMessage('O projeto precisa ter um nome')
                .isLength({ min: 3 })
                .withMessage('O nome do projeto precisa ter no mínimo 3 caracteres'),
            (0, express_validator_1.body)('description')
                .isString()
                .withMessage('O projeto precisa ter uma descrição.')
                .isLength({ min: 6 })
                .withMessage('A descrição do projeto precisa ter no mímino 6 caracteres'),
            (0, express_validator_1.body)('appLink')
                .isString()
                .withMessage('Adicione o link para visualização do projeto'),
            (0, express_validator_1.body)('gitHub')
                .isString()
                .withMessage('Adicione o link do repositório do projeto'),
            (0, express_validator_1.body)('categories')
                .isArray()
                .withMessage('As categorias do projeto precisam ser definidas')
                .isLength({ min: 2 })
                .withMessage('O projeto deve ter pelo menos 2 categorias'),
        ];
    }
}
exports.default = ProjectValidations;
