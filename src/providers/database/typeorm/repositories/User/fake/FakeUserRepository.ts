import IUserData from "@domain/User/data/IUserData";
import UserEntity from "@domain/User/entity/UserEntity";

export default class FakeUserRepository implements IUserData {
  private users: UserEntity[] = [
    {
      id: 1,
      email: 'teste@teste.com',
      password: 'xyz'
    }
  ]

  public async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.users.find(user => user.email === email);
  }
}