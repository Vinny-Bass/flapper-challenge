import GetCustomerByEmailUseCase from "@domain/Customer/useCases/GetCustomerByEmailUseCase";
import CustomerRepository from "@providers/database/typeorm/repositories/Customer/CustomerRepository";

export default class GetCustomerByEmailFactory extends GetCustomerByEmailUseCase {
  constructor() {
    super(
      new CustomerRepository()
    )
  }
}