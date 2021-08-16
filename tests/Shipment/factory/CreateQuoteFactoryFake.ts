import CreateQuoteUseCase from "@domain/Shipment/useCases/CreateQuoteUseCase";
import FakeCustomerRepository from "@providers/database/typeorm/repositories/Customer/fake/FakeCustomerRepository";
import FakeQuotesRepository from "@providers/database/typeorm/repositories/Shipment/fake/FakeQuotesRepository";

export default class CreateQuoteFactoryFake extends CreateQuoteUseCase {
  constructor() {
    super(
      new FakeQuotesRepository(),
      new FakeCustomerRepository()
    )
  }
}