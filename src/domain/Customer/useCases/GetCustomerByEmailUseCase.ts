import IUseCase from "@core/IUseCase";
import ICustomerData, { GetCustomerDTO } from "../data/ICustomerData";
import CustomerEntity from "../entity/CustomerEntity";

export default abstract class GetCustomerByEmailUseCase implements IUseCase<GetCustomerDTO, CustomerEntity | undefined>{
  constructor(
    private readonly customerProvider: ICustomerData
  ) {}

  public async execute({ email }: GetCustomerDTO): Promise<CustomerEntity | undefined>{
    return this.customerProvider.findByEmail(email);
  }
}