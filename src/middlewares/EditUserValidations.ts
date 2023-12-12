import { body } from 'express-validator';

export default class EditUserValidations {
  static handleEditUserValidations() {
    return [
      body('email')
        .isString()
        .withMessage('O e-mail é obrigatório')
        .isEmail()
        .withMessage('Insira uma e-mail válido.'),

      body('username')
        .isString()
        .withMessage('O nome de usuário é obrigatório.')
        .isLength({ min: 3 })
        .withMessage('O nome de usuário precisa ter no mínimo 3 caracteres')
        .custom((value) => {
          if (value.includes('.com')) {
            throw new Error(
              'O nome de usuário de usuário não pode incluir ".com"',
            );
          }

          if (value.includes('-')) {
            throw new Error(
              'O nome de usuário de usuário não pode incluir hífens(-), somente sublinhado(_)',
            );
          }

          if (/[A-Z]/.test(value)) {
            throw new Error(
              'O nome de usuário de usuário não pode conter letras maiúsculas, por favor, use somente minúsculas',
            );
          }

          if (/\s/g.test(value)) {
            throw new Error(
              'O nome de usuário de usuário não pode conter espaços',
            );
          }

          return true;
        }),
    ];
  }
}
