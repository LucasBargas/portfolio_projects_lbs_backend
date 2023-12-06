import { Request } from 'express';

export default class GetToken {
  static handleGetToken(req: Request) {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];

      return token;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return error;
    }
  }
}
