import UserEntity from "../entity/UserEntity";

export default interface IUserData {
  findByEmail(email: string): Promise<UserEntity | undefined>
}