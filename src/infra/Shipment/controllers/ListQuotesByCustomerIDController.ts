import { Request, Response } from "express";
import ListQuotesByCustomerIDFactory from "../factory/ListQuotesByCustomerIDFactory";

export default class ListQuotesByCustomerIDController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { customerID } = request.params;
    const { offset, limit } = request.query;

    const listQuotesByCustomerIDUseCase = new ListQuotesByCustomerIDFactory();

    const quotes = await listQuotesByCustomerIDUseCase.execute({
      customerID: Number(customerID),
      limit: Number(limit),
      offset: Number(offset)
    });

    return response.json(quotes);
  }
}