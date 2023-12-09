import { body } from 'express-validator';

export default class ProjectValidations {
  static handleProjectValidations() {
    return [
      body('photos')
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

      body('title')
        .isString()
        .withMessage('O projeto precisa ter um nome')
        .isLength({ min: 3 })
        .withMessage('O nome do projeto precisa ter no mínimo 3 caracteres'),

      body('description')
        .isString()
        .withMessage('O projeto precisa ter uma descrição.')
        .isLength({ min: 6 })
        .withMessage(
          'A descrição do projeto precisa ter no mímino 6 caracteres',
        ),

      body('appLink')
        .isString()
        .withMessage('Adicione o link para visualização do projeto'),

      body('gitHub')
        .isString()
        .withMessage('Adicione o link do repositório do projeto'),

      body('categories')
        .isArray()
        .withMessage('As categorias do projeto precisam ser definidas')
        .isLength({ min: 2 })
        .withMessage('O projeto deve ter pelo menos 2 categorias'),
    ];
  }
}
