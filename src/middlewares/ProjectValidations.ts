import { body } from 'express-validator';

export default class ProjectValidations {
  static handleProjectValidations() {
    return [
      body('photos').custom((value, { req }) => {
        if (!req.files) {
          throw new Error('A imagem é obrigatória.');
        }
        return true;
      }),

      body('title')
        .not()
        .equals('undefined')
        .withMessage('O título do projeto é obrigatório.')
        .isString()
        .withMessage('O título do projeto é obrigatório.')
        .isLength({ min: 3 })
        .withMessage('O título do projeto precisa ter no mínimo 3 caracteres'),

      body('description')
        .not()
        .equals('undefined')
        .withMessage('A descrição do projeto é obrigatório.')
        .isString()
        .withMessage('A descrição do projeto é obrigatório.')
        .isLength({ min: 10 })
        .withMessage(
          'A descrição do projeto precisa ter no mínimo 10 caracteres',
        ),

      body('appLink')
        .not()
        .equals('undefined')
        .withMessage('O link do projeto é obrigatório')
        .isString()
        .withMessage('O link do projeto é obrigatório'),

      body('gitHub')
        .not()
        .equals('undefined')
        .withMessage('O link do repositório no Github do projeto é obrigatório')
        .isString()
        .withMessage(
          'O link do repositório no Github do projeto é obrigatório',
        ),

      body('categories')
        .not()
        .equals('undefined')
        .isArray()
        .withMessage('É preciso definir as categorias do projeto')
        .isLength({ min: 1 })
        .withMessage(
          'É preciso definir pelo menos uma categoria para o projeto',
        ),
    ];
  }
}
