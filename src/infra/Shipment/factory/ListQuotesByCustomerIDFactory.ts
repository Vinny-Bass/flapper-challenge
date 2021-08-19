import { ListQuotesByCustomerIDUseCase } from "@domain/Shipment/useCases/ListQuotesByCustomerIDUseCase";
import QuotesRepository from "@providers/database/typeorm/repositories/Shipment/QuotesRepository";

export default class ListQuotesByCustomerIDFactory extends ListQuotesByCustomerIDUseCase {
  constructor() {
    super(
      new QuotesRepository()
    )
  }
}