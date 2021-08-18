import { AuthUserDTO, AuthUserResponse } from "@domain/User/data/IUserData";
import AuthUserFactory from "../factory/AuthUserFactory";

export default class AuthUserController {
  public async handle({ email, password }: AuthUserDTO): Promise<AuthUserResponse> {
    const authUserFactory = new AuthUserFactory();
    return authUserFactory.execute({ email, password });
  }
}