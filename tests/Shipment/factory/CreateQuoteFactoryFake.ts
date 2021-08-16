import CreateQuoteUseCase from "@domain/Shipment/useCases/CreateQuoteUseCase";
import FakeQuotesRepository from "@providers/database/typeorm/repositories/Shipment/fake/FakeQuotesRepository";

export default class CreateQuoteFactoryFake extends CreateQuoteUseCase {
  constructor() {
    super(
      new FakeQuotesRepository()
    )
  }
}