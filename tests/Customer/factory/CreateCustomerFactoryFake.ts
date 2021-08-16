import CreateCustomerUseCase from "@domain/Customer/useCases/CreateCustomerUseCase";
import FakeCustomerRepository from "@providers/database/typeorm/repositories/Customer/fake/FakeCustomerRepository";

export default class CreateCustomerFactoryFake extends CreateCustomerUseCase {
  constructor() {
    super(
      new FakeCustomerRepository()
    )
  }
}