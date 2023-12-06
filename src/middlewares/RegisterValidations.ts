import { body } from 'express-validator';

export default class RegisterValidations {
  static handleRegisterValidations() {
    return [
      body('username')
        .isString()
        .withMessage('O nome é obrigatório.')
        .isLength({ min: 3 })
        .withMessage('O nome precisa ter no mínimo 3 caracteres'),

      body('email')
        .isString()
        .withMessage('O e-mail é obrigatório')
        .isEmail()
        .withMessage('Insira uma e-mail válido'),

      body('password')
        .isString()
        .withMessage('A senha é obrigatória')
        .isLength({ min: 6 })
        .withMessage('A senha precisa ter no mínimo 6 caracteres'),

      body('confirmPassword')
        .isString()
        .withMessage('A confirmação de senha é obrigatória')
        .custom((value, { req }) => {
          if (value !== req.body.password) {
            throw new Error('As senhas devem ser iguais');
          }
          return true;
        }),
    ];
  }
}
