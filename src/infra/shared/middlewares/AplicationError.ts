import { Request, Response, NextFunction } from 'express';
import AppError from '@core/AppError';

interface IErro extends Error {
  statusCode: number;
  type: string;
}

const ApplicationError = (
  err: IErro,
  _request: Request,
  response: Response,
  _: NextFunction,
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err.statusCode === 400) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    message: 'Internal server error',
  });
};

export default ApplicationError;
