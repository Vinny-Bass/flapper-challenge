import ListQuotesUseCase from "@domain/Shipment/useCases/ListQuotesUseCase";
import FakeQuotesRepository from "@providers/database/typeorm/repositories/Shipment/fake/FakeQuotesRepository";

export default class ListQuotesFactoryFake extends ListQuotesUseCase {
  constructor() {
    super(
      new FakeQuotesRepository()
    )
  }
}