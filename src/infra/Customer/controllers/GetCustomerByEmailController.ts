import CustomerEntity from "@domain/Customer/entity/CustomerEntity";
import GetCustomerByEmailFactory from "../factory/GetCustomerByEmailFactory";

export default class GetCustomerByEmailController {
  public async handle(email: string): Promise<CustomerEntity | undefined> {
    const getCustomerByEmailFactory = new GetCustomerByEmailFactory();
    return getCustomerByEmailFactory.execute({ email });
  }
}