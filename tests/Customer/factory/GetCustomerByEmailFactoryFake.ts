import GetCustomerByEmailUseCase from '@domain/Customer/useCases/GetCustomerByEmailUseCase';
import FakeCustomerRepository from '@providers/database/typeorm/repositories/Customer/fake/FakeCustomerRepository';

export default class GetCustomerByEmailFactoryFake extends GetCustomerByEmailUseCase {
  constructor() {
    super(
      new FakeCustomerRepository()
    )
  }
}