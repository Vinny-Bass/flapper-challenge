import { Request, Response, NextFunction } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import { verify } from 'jsonwebtoken';
import FindUserByEmailFactory from '@infra/User/factory/FindUserByEmailFactory';
import AppError from '@core/AppError';

type IPayload = {
  sub: string;
}

export const authRequestValidation = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

export async function ensureAuthenticated(
  request: Request,
  _response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new AppError("Token is missign");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userEmail }  = verify(token, 'test-hash') as IPayload;

    const findUserByEmailUseCase = new FindUserByEmailFactory();

    const user = await findUserByEmailUseCase.execute(userEmail);

    if(!user) throw new AppError("User do not exists");

    next();
  } catch (err){
    throw new AppError("Invalid Token")
  }
}

export async function ensureUserIntegrity(
  request: Request,
  _response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;
  const { customerID } = request.params;

  if(!authHeader) {
    throw new AppError("Token is missign");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userEmail }  = verify(token, 'test-hash') as IPayload;

    const findUserByEmailUseCase = new FindUserByEmailFactory();

    const user = await findUserByEmailUseCase.execute(userEmail);

    if(!user) throw new AppError("User do not exists");

    if(user.id !== parseInt(customerID)) throw new AppError("Invalid Token");

    next();
  } catch (err){
    throw new AppError("Invalid Token")
  }
}