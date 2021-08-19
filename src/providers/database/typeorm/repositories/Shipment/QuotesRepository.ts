import IShipmentData, { CreateQuoteDTO, ListQuotesByCustomerIDDTO, ListQuotesDTO } from "@domain/Shipment/data/IShipmentData";
import ShipmentEntity from "@domain/Shipment/entity/ShipmentEntity";
import { getRepository, Repository } from "typeorm";
import QuotesModel from "../../models/Shipment/QuotesModel";

export default class QuotesRepository implements IShipmentData {
  private repository: Repository<QuotesModel>;

  constructor() {
    this.repository = getRepository(QuotesModel);
  }

  public async createQuote(data: CreateQuoteDTO): Promise<ShipmentEntity> {
    const newQuote = {
      customerID: data.customer.customerID,
      ...data.shipment,
      ...data.transport
    }
    const quote = this.repository.create(newQuote);

    return this.repository.save(quote);
  }

  public async listQuotes(data: ListQuotesDTO): Promise<ShipmentEntity[]> {
    const { limit, offset } = data;
    return this.repository.find({
      order: { 
        id: "ASC"
      },
      skip: offset,
      take: limit
    })
  }

  public async listQuotesByCustomerID(data: ListQuotesByCustomerIDDTO): Promise<ShipmentEntity[]> {
    const { customerID ,limit, offset } = data;
    return this.repository.find({
      where: {
        customerID
      },
      order: { 
        id: "ASC"
      },
      skip: offset,
      take: limit
    })
  }
}