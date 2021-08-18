import { Request, Response, NextFunction } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import { verify } from 'jsonwebtoken';
import FindUserByEmailFactory from '@infra/User/factory/FindUserByEmailFactory';

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
) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new Error("Token is missign");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userEmail }  = verify(token, 'test-salt') as IPayload;

    const findUserByEmailUseCase = new FindUserByEmailFactory();

    const user = await findUserByEmailUseCase.execute(userEmail) ;

    if(!user) throw new Error("User do not exists");

    next();
  } catch {
    throw new Error("Invalid Token")
  }
}