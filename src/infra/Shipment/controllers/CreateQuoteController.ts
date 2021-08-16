import { CreateQuoteDTO } from "@domain/Shipment/data/IShipmentData";
import { Request, Response } from 'express';
import CreateQuoteFactory from "../factory/CreateQuoteFactory";

export default class CreateQuoteController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const createQuoteFactory = new CreateQuoteFactory();

    const data: CreateQuoteDTO = request.body;

    const quote = await createQuoteFactory.execute(data);

    return response.json(quote);
  }
}