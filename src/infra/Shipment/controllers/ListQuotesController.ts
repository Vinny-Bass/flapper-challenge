import { ListQuotesDTO } from "@domain/Shipment/data/IShipmentData";
import { Request, Response } from "express";
import ListQuotesFactory from "../factory/ListQuotesFactory";

export default class ListQuotesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listQuotesUseCase = new ListQuotesFactory()
    const data: ListQuotesDTO = request.body;

    const quotes = await listQuotesUseCase.execute(data);

    return response.json(quotes);
  }

}