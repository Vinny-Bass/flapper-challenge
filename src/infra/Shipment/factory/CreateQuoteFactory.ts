import CreateQuoteUseCase from "@domain/Shipment/useCases/CreateQuoteUseCase";
import CustomerRepository from "@providers/database/typeorm/repositories/Customer/CustomerRepository";
import QuotesRepository from "@providers/database/typeorm/repositories/Shipment/QuotesRepository";

export default class CreateQuoteFactory extends CreateQuoteUseCase {
  constructor() {
    super(
      new QuotesRepository(),
      new CustomerRepository(),
    )
  }
}