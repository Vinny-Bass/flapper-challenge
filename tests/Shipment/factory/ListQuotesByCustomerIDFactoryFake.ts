import { ListQuotesByCustomerIDUseCase } from "@domain/Shipment/useCases/ListQuotesByCustomerIDUseCase";
import FakeQuotesRepository from "@providers/database/typeorm/repositories/Shipment/fake/FakeQuotesRepository";

export default class ListQuotesByCustomerIDFactoryFake extends ListQuotesByCustomerIDUseCase {
  constructor() {
    super(
      new FakeQuotesRepository()
    )
  }
}