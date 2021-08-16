import IUseCase from "@core/IUseCase";
import ICustomerData, { CreateCustomerDTO } from "../data/ICustomerData";
import CustomerEntity from "../entity/CustomerEntity";

export default abstract class CreateCustomerUseCase implements IUseCase<CreateCustomerDTO, CustomerEntity> {
  constructor(
    private readonly customerProvider: ICustomerData
  ) {}

  public async execute(data: CreateCustomerDTO): Promise<CustomerEntity> {
    return this.customerProvider.createCustomer(data);
  }
}