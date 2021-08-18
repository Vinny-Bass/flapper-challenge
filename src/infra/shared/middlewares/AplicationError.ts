import { Request, Response, NextFunction } from 'express';
import AppError from '@core/AppError';


const ApplicationError = (
  err: Error,
  _request: Request,
  response: Response,
  _: NextFunction,
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    message: 'Internal server error ' + err.message,
  });
};

export default ApplicationError;
