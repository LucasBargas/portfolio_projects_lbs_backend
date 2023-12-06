import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export default class Validate {
  static handleValidate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    const extractedErrors = [];

    errors.array().map((err) => extractedErrors.push(err.msg));

    return res.status(422).json({
      errors: extractedErrors,
    });
  }
}
