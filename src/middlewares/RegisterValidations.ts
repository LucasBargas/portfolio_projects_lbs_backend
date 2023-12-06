import { body } from 'express-validator';

export default class RegisterValidations {
  static handleRegisterValidations() {
    return [
      body('username')
        .isString()
        .withMessage('O nome é obrigatório.')
        .isLength({ min: 3 })
        .withMessage('O nome precisa ter no mínimo 3 caracteres')
        .custom((value) => {
          if (value.includes('.com')) {
            throw new Error('O nome de usuário não pode incluir ".com"');
          }

          if (value.includes('-')) {
            throw new Error(
              'O nome de usuário não pode incluir hífens(-), somente sublinhado(_)',
            );
          }

          if (/[A-Z]/.test(value)) {
            throw new Error(
              'O nome de usuário não pode conter letras maiúsculas, por favor, use somente minúsculas',
            );
          }

          if (/\s/g.test(value)) {
            throw new Error('O nome de usuário não pode conter espaços');
          }

          return true;
        }),

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
