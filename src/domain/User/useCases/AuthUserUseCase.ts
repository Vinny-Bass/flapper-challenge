import IUseCase from "@core/IUseCase";
import IUserData, { AuthUserDTO, AuthUserResponse } from "../data/IUserData";
import { scryptSync } from 'crypto';
import { sign } from 'jsonwebtoken';
import AppError from "@core/AppError";

export default abstract class AuthUserUseCase implements IUseCase<AuthUserDTO, AuthUserResponse> {
  constructor(
    private readonly userProvider: IUserData
  ) {}

  public async execute({ email, password }: AuthUserDTO): Promise<AuthUserResponse> {
    const passHash = scryptSync(password, 'test-salt', 32).toString("hex");

    const user = await this.userProvider.findUser({ email, password: passHash});

    if (!user) {
      throw new AppError("Email or password are incorrect", 401);
    }

    const token = sign({}, "test-hash", {
      subject: user.email,
      expiresIn: "1d"
    });

    return { token }

  }
}