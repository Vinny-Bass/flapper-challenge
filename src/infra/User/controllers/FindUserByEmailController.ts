import UserEntity from "@domain/User/entity/UserEntity";
import FindUserByEmailFactory from "../factory/FindUserByEmailFactory";

export default class FindUserByEmailController {
  public async handle(email: string): Promise<UserEntity | undefined> {
    const findUserByEmailFactory = new FindUserByEmailFactory();
    return findUserByEmailFactory.execute(email);
  }
}