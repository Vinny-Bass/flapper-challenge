import ListQuotesUseCase from "@domain/Shipment/useCases/ListQuotesUseCase";
import QuotesRepository from "@providers/database/typeorm/repositories/Shipment/QuotesRepository";

export default class ListQuotesFactory extends ListQuotesUseCase {
  constructor() {
    super(
      new QuotesRepository()
    )
  }
}