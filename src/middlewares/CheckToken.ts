import jwt, { JwtPayload } from 'jsonwebtoken';
import GetToken from '../helpers/GetToken';
import { NextFunction, Request, Response } from 'express';

interface IRequest extends Request {
  user: string | JwtPayload;
}

export default class CheckToken {
  static async handleCheckToken(
    req: IRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Acesso negado!' });
      }

      const token = GetToken.handleGetToken(req);

      if (!token) {
        return res.status(401).json({ message: 'Acesso negado!' });
      }

      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      return res.status(400).json({ message: 'O Token é inválido!' });
    }
  }
}
