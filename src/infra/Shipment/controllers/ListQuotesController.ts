import { Request, Response } from "express";
import ListQuotesFactory from "../factory/ListQuotesFactory";

export default class ListQuotesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listQuotesUseCase = new ListQuotesFactory()
    const { limit, offset} = request.query;

    const quotes = await listQuotesUseCase.execute({
      limit: Number(limit),
      offset: Number(offset)
    });

    return response.json(quotes);
  }

}